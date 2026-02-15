import { Component, computed, signal, WritableSignal } from '@angular/core';

interface ICharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  protected characters: WritableSignal<ICharacter[]> = signal([
    {
      id: 1,
      name: 'Goku',
      power: 9500,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 9000,
    },
    {
      id: 3,
      name: 'Gohan',
      power: 8700,
    },
    {
      id: 4,
      name: 'Piccolo',
      power: 8200,
    }
  ])

  // protected powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //     'text-primary': true,
  //   };
  // })
}
