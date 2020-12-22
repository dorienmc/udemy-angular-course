import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  firebaseUrl = 'https://udemy-ng-database-default-rtdb.europe-west1.firebasedatabase.app/';
  isFetching = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  onCreatePost(postData: { title: string; content: string }): void {
    // Send Http request
    this.http.post<{name: string}>(this.firebaseUrl + 'posts.json', postData)
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts(): void{
    // Send Http request
    this.fetchPosts();
  }

  onClearPosts(): void {
    // Send Http request
  }

  private fetchPosts(): void {
    this.isFetching = true;
    this.http
      .get<{[key: string]: Post}>(this.firebaseUrl + 'posts.json')
      .pipe(
        //map((responseData: {[key: string]: Post}) => {
        map(responseData => {
        const postsArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postsArray.push({...responseData[key]});
          }
        }
        return postsArray;
      }))
      .subscribe(posts => {
        this.isFetching = false;
        this.loadedPosts = posts;
    });
  }
}
