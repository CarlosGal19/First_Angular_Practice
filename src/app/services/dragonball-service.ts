import { effect, Injectable, signal, WritableSignal } from '@angular/core';
import { ICharacter } from '../interfaces/character.interface';

const loadCharacters = (): ICharacter[] => {
  const characters = JSON.parse(localStorage.getItem('characters') ?? '[]') as ICharacter[]

  return [];
}

@Injectable({
  providedIn: 'root',
})
export class DragonballService {
  characters: WritableSignal<ICharacter[]> = signal(loadCharacters())

  saveToLocalStorage = effect(() => {
    localStorage.setItem('db-super-characters', JSON.stringify(this.characters()));
  })

  addCharacter = (newCharacter: ICharacter) => {
    const { id, name, power } = newCharacter;
    this.characters.update((current) => [...current, { id, name, power }]);
  }
}
