import {Component, Input} from '@angular/core';
import {Hero} from '../heroes/hero';
import {HeroService} from '../hero.service';
import {Location} from '@angular/common';
import {catchError, tap} from 'rxjs/operators';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-hero-preview',
  templateUrl: './hero-preview.component.html',
  styleUrls: ['./hero-preview.component.css']
})
export class HeroPreviewComponent {
  @Input() hero: Hero;

  constructor(private heroService: HeroService,
              private location: Location) {
  }

  save(): void {
    this.heroService.updateHero(this.hero)
      .subscribe(() => this.location.back());
  }
}
