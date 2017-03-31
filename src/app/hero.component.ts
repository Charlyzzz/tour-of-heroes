import { Component, Input } from '@angular/core';
import { Hero } from './hero'

@Component({
    selector: 'hero-detail',
    templateUrl: './heroe.component.html'
})

export class HeroDetailComponent {
    @Input() hero: Hero;
}