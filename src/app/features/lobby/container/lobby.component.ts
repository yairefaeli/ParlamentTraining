import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, getPlayerName } from 'src/app/core/reducers/core.reducer';
import { FetchLobbyPlayers } from '../lobby.actions';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {
  playerName$ = this.store.select(getPlayerName);

  constructor(public store: Store<CoreState>) { }

  ngOnInit() {
  }

}
