import { Component, OnInit,  } from '@angular/core';
import { Imessage, JsonReaderService } from '../servises/json-reader.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Imessage[];
  page: number = 0;
  totalMessages: number = 500;
  currentMessages: Imessage[];

  constructor(
    private _jsonReader: JsonReaderService,
    private _activatedRoute: ActivatedRoute,
    private _location: Location,
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('ad3f3') != '20521') {
      this._router.navigate(['login']);
      return;
    };
    this.page = Number(this._activatedRoute.snapshot.paramMap.get('page'));
    this._jsonReader.getJSON().subscribe(data => {
      this.messages = data.messages;
      this.currentMessages = this.messages.slice(this.page * this.totalMessages, this.page * this.totalMessages + this.totalMessages);
    });
  }

  changePage(step: number): void {
    this.page += step;
    if (this.page < 0) this.page = 0;
    this.currentMessages = this.messages.slice(this.page * this.totalMessages, this.page * this.totalMessages + this.totalMessages);
    this._location.replaceState(`${this.page}`);
  }



}
