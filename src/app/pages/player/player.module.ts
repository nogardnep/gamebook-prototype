import { PlayerComponent } from './../../components/player/player.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlayerPageRoutingModule } from './player-routing.module';

import { PlayerPage } from './player.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlayerPageRoutingModule
  ],
  declarations: [PlayerPage, PlayerComponent]
})
export class PlayerPageModule {}
