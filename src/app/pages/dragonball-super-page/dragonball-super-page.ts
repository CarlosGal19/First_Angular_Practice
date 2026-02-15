import { Component, computed, signal, WritableSignal } from '@angular/core';

interface ICharacter {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-super-page',
  imports: [],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  protected characters: WritableSignal<ICharacter[]> = signal([] as ICharacter[])

  protected name = signal('');
  protected power = signal<number>(0);

  protected addCharacter = () => {
    const id = Date.now();

    const newName = this.name();
    const newPower = this.power();

    this.characters.update((current) => [...current, { id, name: newName, power: newPower, }]);

    this.resetFields()
  }

  protected resetFields = () => {
    this.name.set('');
    this.power.set(0);
  }
}
