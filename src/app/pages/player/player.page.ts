import { Play } from 'src/models/Play';
import { Player } from '../../../models/Player';
import { GameService } from './../../services/game.service';
import { Subscription } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player',
  templateUrl: './player.page.html',
  styleUrls: ['./player.page.scss'],
})
export class PlayerPage implements OnInit, OnDestroy {
  play: Play;

  private playSubscription: Subscription;

  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {
    this.playSubscription = this.gameService.playSubject.subscribe(
      (play: Play) => {
        this.play = play;
      }
    );
    this.gameService.emitPlay();
  }

  ngOnDestroy() {
    this.playSubscription.unsubscribe();
  }

  onClickExit(): void {
    this.router.navigate(['/story']);
  }
}
