import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DiceRollComponent } from './dice-roll/dice-roll.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';

const routes: Routes = [
  {path: 'diceRoll', component: DiceRollComponent},
  {path: 'characterSheet', component: CharacterSheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
