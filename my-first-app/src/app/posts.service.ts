import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Post} from './post.model';
import {catchError, map} from 'rxjs/operators';
import {Observable, Subject, throwError } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostsService {
  firebaseUrl = 'https://udemy-ng-database-default-rtdb.europe-west1.firebasedatabase.app/posts.json';
  error = new Subject<string>();


  constructor(private http: HttpClient) {
  }

  createAndStorePost(title: string, content: string): void {
    const postData: Post = {title, content};
    // Send Http request
    this.http
      .post<{name: string}>(this.firebaseUrl, postData)
      .subscribe(responseData => {
        console.log(responseData);
      },
        error => {
        this.error = error.message;
        });
  }

  fetchPosts(): Observable<Post[]> {
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty');
    searchParams = searchParams.append('custom', 'key');
    return this.http
      .get<{[key: string]: Post}>(
        this.firebaseUrl,
        {
          headers: new HttpHeaders({'Custom-Header': 'Hello' }),
          params: searchParams
        })
      .pipe(
        map(responseData => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key]});
            }
          }
          return postsArray;
        }),
        catchError(errorRes => {
          // Send to analytics server
          // ...
          // Re throw the error
          return throwError(errorRes);
        })
      );
  }

  deletePosts(): Observable<any> {
    return this.http.delete(this.firebaseUrl);
  }
}
