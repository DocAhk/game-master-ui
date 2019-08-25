import { Component, OnInit } from '@angular/core';
import { CharacterSheet } from './character-sheet.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  private character: CharacterSheet = new CharacterSheet('Jim', '8', 'male_aumaua_b_lg.png');

  private portraitURL = environment.restURL + '/image?portraitFileName=' + this.character.portrait;

  constructor() { }

  ngOnInit() {
  }

}
