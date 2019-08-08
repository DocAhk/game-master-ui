import { Component, OnInit } from '@angular/core';
import { CharacterSheet } from './character-sheet.model';

@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css']
})
export class CharacterSheetComponent implements OnInit {

  private character: CharacterSheet = new CharacterSheet("Jim", "https://firebasestorage.googleapis.com/v0/b/gamemaster-4b6ea.appspot.com/o/male_aumaua_b_lg.png?alt=media&token=472082e2-f447-4219-9f13-077daa724fde");

  constructor() { }

  ngOnInit() {
  }

}
