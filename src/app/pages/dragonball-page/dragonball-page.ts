import { Component, computed, signal, WritableSignal } from '@angular/core';

interface ICharacter {
  id: number;
  name: string;
  power: number;
}

interface INewCharacter {
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
})
export class DragonballPage {
  protected characters: WritableSignal<ICharacter[]> = signal(JSON.parse(localStorage.getItem('characters') || '[]') as ICharacter[])

  // protected powerClasses = computed(() => {
  //   return {
  //     'text-danger': true,
  //     'text-primary': true,
  //   };
  // })

  protected name = signal('');
  protected power = signal<number>(0);

  protected addCharacter = () => {
    const id = Date.now();

    const newName = this.name();
    const newPower = this.power();

    this.characters.update((current) => [...current, { id, name: newName, power: newPower, }]);

    localStorage.setItem('characters', JSON.stringify(this.characters()))

    this.resetFields()
  }

  protected resetFields = () => {
    this.name.set('');
    this.power.set(0);
  }
}
