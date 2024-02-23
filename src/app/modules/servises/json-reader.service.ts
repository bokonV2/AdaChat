import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Imessages {
  messages: Imessage[]
}

export interface Imessage {
  from: string,
  text: string,
  date: string,
  type: string
}

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<Imessages> {
    return this.http.get<Imessages>("./assets/result.json");
  }
}
