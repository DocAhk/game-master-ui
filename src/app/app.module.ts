import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    DiceRollComponent,
    CharacterSheetComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
