import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiceRollService } from './dice-roll.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {
  roll: string;

  ngOnInit() {}

  constructor(private service: DiceRollService) {
   }

   getDiceRoll() {
     this.service.getDiceRoll().subscribe(roll => {
       this.roll = roll;
      });
    }

  

}
