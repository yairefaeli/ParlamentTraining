import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CoreState, getPlayerName } from 'src/app/core/reducers/core.reducer';
import { getLobbyPlayers, getPlayerStatus } from '../reducer/lobby.reducer';
import { Player } from '@angular/core/src/render3/interfaces/player';
import { Observable, forkJoin, combineLatest } from 'rxjs';
import { async } from '@angular/core/testing';
import { UpdatePlayerStatus, PlayerUpdated, SubscribeToPlayerUpdates } from '../lobby.actions';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.less']
})
export class LobbyComponent implements OnInit {
  playerName$ = this.store.select(getPlayerName);
  playerStatus$ = this.store.select(getPlayerStatus);
  lobyPlayers$ = this.store.select(getLobbyPlayers);

  constructor(public store: Store<CoreState>) {
    this.playerName$.subscribe(
      (playerName) => {
        this.store.dispatch(new SubscribeToPlayerUpdates(playerName));
      })
  }

  ngOnInit() {
    
  }

  executeReady() {
    this.playerName$.subscribe((nameValue) => {
        this.store.dispatch(new UpdatePlayerStatus({ status: "READY", name: nameValue }))
    });

    // combineLatest(
    //   this.playerName$,
    //   this.playerStatus$
    // ).pipe(
    //   map(([nameValue, statusValue]) => {
    //     return { status: statusValue, name: nameValue }
    //   })
    // ).subscribe(({ status: statusValue, name: nameValue }) =>
    //   this.store.dispatch(new UpdatePlayerStatus({ status: "READY", name: nameValue }))
    // )

  }

}
