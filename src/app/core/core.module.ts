import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store'
import { coreStateToken, coreReducer } from './reducers/core.reducer'

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(coreStateToken, coreReducer)
  ]
})
export class CoreModule { }
