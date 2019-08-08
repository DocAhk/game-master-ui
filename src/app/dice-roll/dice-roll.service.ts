import { Injectable , Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class DiceRollService {
    private url: string = 'http://localhost:8080/diceRoll';

    constructor(private http: HttpClient) { }

    getDiceRoll(): Observable<string> {
        return this.http.get<string>(this.url);
    }
}