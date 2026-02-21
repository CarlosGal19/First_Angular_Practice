import { Component, inject } from '@angular/core';
import { CharacterList } from "../../components/dragonball/character-list/character-list";
import { DragonballCharacterAdd } from "../../components/dragonball/dragonball-character-add/dragonball-character-add";
import { DragonballService } from '../../services/dragonball-service';

@Component({
  selector: 'app-dragonball-super-page',
  imports: [CharacterList, DragonballCharacterAdd],
  templateUrl: './dragonball-super-page.html',
})
export class DragonballSuperPage {
  // constructor(public dragonBallService: DragonballService) {}

  public dragonBallService = inject(DragonballService);

}
