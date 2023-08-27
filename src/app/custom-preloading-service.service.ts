import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomPreloadingServiceService implements PreloadingStrategy {
  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    console.log('here');
    if (route.data && route.data['preload']) {
      return fn();
    }
    return of(null);
  }
}
