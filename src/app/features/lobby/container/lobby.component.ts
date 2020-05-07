import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, getPlayerName, getLobbyPlayers } from 'src/app/core/reducers/core.reducer';
import { FetchLobbyPlayers } from '../lobby.actions';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {
  playerName$ = this.store.select(getPlayerName);
  lobbyPlayers$ = this.store.select(getLobbyPlayers);
  
  constructor(public store: Store<CoreState>) { }

  ngOnInit() {
  }

}
