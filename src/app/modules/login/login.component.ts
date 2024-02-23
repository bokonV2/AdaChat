import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  password1: string = '';
  password2: string = '';

  constructor(
    private _router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('ad3f3') == '20521') {
      this._router.navigate(['ms', '0']);
    };
  }

  onEnter(): void {
    if (Md5.hashStr(this.password1) != '41c5fe55419dd46f90d267ec5d9b65bc') return;
    if (Md5.hashStr(this.password2) != 'a5755e200086a6989544f6ede0542e69') return;
    localStorage.setItem('ad3f3', '20521');
    this._router.navigate(['ms', '0']);
  }

}
