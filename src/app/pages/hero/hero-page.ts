import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './hero-page.html'
})
export class HeroPage {
  protected name = signal('Ironman');
  protected age = signal(45);

  getHeroDescription = () => `${ this.name() } - ${ this.age() }`;

  changeHero = () => {
    this.name.set('Spiderman');
    this.age.set(22);
  }
  resetForm = () => {
    this.name.set('Ironman');
    this.age.set(45);
  }
  changeAge = () => {
    this.age.set(60);
  }
  upperName = () => this.name().toLocaleUpperCase();
}
