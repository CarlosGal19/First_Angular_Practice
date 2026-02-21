import { Component, computed, signal, WritableSignal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { ICharacter } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  protected characters: WritableSignal<ICharacter[]> = signal([{
    id: 1,
    name: 'Goku',
    power: 9001
  }])

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
