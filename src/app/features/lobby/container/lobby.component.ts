import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, getPlayerName } from 'src/app/core/reducers/core.reducer';
import { getLobbyPlayers, getPlayerStatus, getTimer } from '../reducer/lobby.reducer';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { Observable, forkJoin, combineLatest } from 'rxjs';
import { async } from '@angular/core/testing';
import { UpdatePlayerStatus, PlayerUpdated, SubscribeToPlayerUpdates, SubscribeToTimer } from '../lobby.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {
  playerName: string;
  playerStatus: string;
  lobyPlayers: { [key: string]: string };

  timer$ = this.store.select(getTimer)

  constructor(public store: Store<CoreState>) { }

  ngOnInit() {
    this.store.select(getPlayerName).subscribe((value) => { this.playerName = value })
    this.store.select(getPlayerStatus).subscribe((value) => { this.playerStatus = value })
    this.store.select(getLobbyPlayers).subscribe((value) => { this.lobyPlayers = value })

    this.store.dispatch(new SubscribeToPlayerUpdates(this.playerName));
    this.store.dispatch(new SubscribeToTimer());
  }

  executeReady() {
    this.store.dispatch(new UpdatePlayerStatus({ status: "READY", name: this.playerName }))
  }
}
