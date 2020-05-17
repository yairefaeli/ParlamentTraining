import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { ExecuteLogin } from '../login-screen.actions';
import { FetchLobbyPlayers } from '../../lobby/lobby.actions';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.less']
})
export class LoginScreenComponent implements OnInit {

  constructor(public store: Store<any>) { }

  ngOnInit() {
  
  }

  @ViewChild('playerName')playerName: ElementRef
  executeLogin() {
    this.store.dispatch(new ExecuteLogin(this.playerName.nativeElement.value))
    this.store.dispatch(new FetchLobbyPlayers());
  }
}
