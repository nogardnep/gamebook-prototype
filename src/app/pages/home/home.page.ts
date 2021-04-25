import { GameService } from './../../services/game.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(private gameService: GameService, private router: Router) {}

  ngOnInit() {}

  onClickNew(): void {
    this.gameService.startNewPlay().then(() => {
      this.router.navigate(['/story']);
    });
  }

  onClickLoad(): void {
    this.gameService.loadLastPlay().then(() => {
      this.router.navigate(['/story']);
    });
  }
}
