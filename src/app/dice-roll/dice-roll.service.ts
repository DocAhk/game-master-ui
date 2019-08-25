import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})

export class DiceRollService {
    private url: string = environment.restURL + '/diceRoll';

    constructor(private http: HttpClient) {}

    getDiceRoll(sides?: number): Observable<string> {
        if(typeof sides != 'undefined') {
            return this.http.get<string>(this.url + '?sides=' + sides);
        }
        return this.http.get<string>(this.url);
    }
}