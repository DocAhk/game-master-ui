import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DiceRollService } from './dice-roll.service';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {
  private roll: string;

  private sides: number = 20;

  ngOnInit() {}

  constructor(private service: DiceRollService) {
   }

   getDiceRoll() {
     this.service.getDiceRoll(this.sides).subscribe(roll => {
       this.roll = roll;
      });
    }

  

}
