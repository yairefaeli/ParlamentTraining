import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExecuteLogin } from '../login-screen.actions';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {
  playerName: string;

  constructor(public store: Store<any>) { }

  ngOnInit() {
  
  }

  executeLogin() {
    this.store.dispatch(new ExecuteLogin(this.playerName))
  }

  onKey(event: any) {
    this.playerName = event.target.value;
  }
}
