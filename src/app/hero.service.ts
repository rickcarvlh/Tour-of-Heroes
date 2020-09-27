import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // mostar a lista a inteira de herois
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}
