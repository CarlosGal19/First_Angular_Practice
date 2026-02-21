import { Injectable, signal, WritableSignal } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters: WritableSignal<ICharacter[]> = signal([{
    id: 1,
    name: 'Goku',
    power: 9001
  }])

  addCharacter = (newCharacter: ICharacter) => {
    const { id, name, power } = newCharacter;
    this.characters.update((current) => [...current, { id, name, power }]);
  }
}
