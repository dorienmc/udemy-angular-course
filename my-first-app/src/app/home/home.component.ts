import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;

  constructor() { }
  ngOnDestroy(): void {
    this.firstObsSubscription.unsubscribe();
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe( count => {
    //   console.log(count);
    // });
    const customInterValObservable = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count === 2) {
          observer.complete();// Observable is done after this.
        }
        if (count > 3) {
          observer.error(new Error("Count is greater than 3!")); // When it cancels due to an error, the observable is NOT complete!
        }
        count++;
      }, 1000);
    });

    this.firstObsSubscription = customInterValObservable.pipe(
      filter((data) => {
        return data > 0;
      }),
      map((data: number) => {
      return 'Round: ' + (data);
    })).subscribe( data => {
      console.log(data);
    }, (error: { message: any; }) => {
      alert(error.message);
    }, () => {
      // Usefull place for cleanup.
      console.log('completed');
    });
  }

}
