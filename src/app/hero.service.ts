import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { MessageService } from './message.service';
import { HEROES } from './mock-hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private htpp: HttpClient) { }

  private heroesUrl = 'api/heroes' // URL to web API

  // mostar a lista a inteira de herois
  // enviar messagem após ir buscar is herois
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // TODO:  Get heroes from the server
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // TODO: log a HeroService message with MessageService 
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }


}
