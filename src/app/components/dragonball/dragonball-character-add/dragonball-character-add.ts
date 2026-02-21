import { Component, input, signal, InputSignal, output } from '@angular/core';
import { ICharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.html',
})
export class DragonballCharacterAdd {
  protected name = signal('');
  protected power = signal<number>(0);

  public newCharacter = output<ICharacter>();

  protected addCharacter = () => {
    const id = Date.now();

    const newName = this.name();
    const newPower = this.power();

    this.newCharacter.emit({ id, name: newName, power: newPower })

    this.resetFields()
  }

  protected resetFields = () => {
    this.name.set('');
    this.power.set(0);
  }
}
