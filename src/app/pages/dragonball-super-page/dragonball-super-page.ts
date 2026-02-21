import { Component, computed, signal, WritableSignal } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { ICharacter } from '../../interfaces/character.interface';
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  protected characters: WritableSignal<ICharacter[]> = signal([{
    id: 1,
    name: 'Goku',
    power: 9001
  }])

  addCharacter = (newCharacter: ICharacter) => {
    const { id, name, power } = newCharacter;
    this.characters.update((current) => [...current, { id, name, power }]);
  }
}
