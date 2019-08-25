import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from './character.model';

@Injectable({
    providedIn: 'root'
})

export class CharacterSheetService {
    private url = environment.restURL + '/Jim';

    constructor(private http: HttpClient) {}

    getCharacter(): Observable<Character> {
        return this.http.get<Character>(this.url);
    }
}