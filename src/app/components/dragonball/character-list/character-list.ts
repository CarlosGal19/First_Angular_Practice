import { Component, input, InputSignal } from '@angular/core';
import { ICharacter } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
})
export class CharacterList {
  characters: InputSignal<ICharacter[]> = input.required();

  listName: InputSignal<string> = input.required();
}
