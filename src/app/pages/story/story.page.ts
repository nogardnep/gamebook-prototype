import { Play } from 'src/models/Play';
import { Player } from '../../../models/Player';
import { GameService } from './../../services/game.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-story',
  templateUrl: './story.page.html',
  styleUrls: ['./story.page.scss'],
})
export class StoryPage implements OnInit, OnDestroy {
  private playSubscription: Subscription;
  play: Play;

  constructor(private router: Router, private gameService: GameService) {}

  ngOnInit(): void {
    this.playSubscription = this.gameService.playSubject.subscribe(
      (play: Play) => {
        this.play = play;
        console.log(this.play);
      }
    );
    this.gameService.emitPlay();
  }

  ngOnDestroy(): void {
    this.playSubscription.unsubscribe();
  }

  onClickPlayer(): void {
    this.router.navigate(['/player']);
  }

  onClickHome(): void {
    this.router.navigate(['/home']);
  }
}
