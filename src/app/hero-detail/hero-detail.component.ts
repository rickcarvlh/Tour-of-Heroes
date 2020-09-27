import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  // hero component will bind to this property
  // It's receiving information from the parent component
  @Input() hero: Hero;

  constructor() { }

  ngOnInit(): void {
  }

}
