import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Character } from './character.model';
import { CharacterSheetService } from './character-sheet.service';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  private character: Character;

  private portraitURL = environment.restURL + '/image?portraitFileName=';

  constructor(private service: CharacterSheetService) {
    this.getCharacter();
    
  }

  ngOnInit() {
    
  }

  getCharacter() {
    this.service.getCharacter().subscribe(character =>{
      this.character = character;
      this.portraitURL = this.portraitURL + this.character.portrait;
    })
  }
}
