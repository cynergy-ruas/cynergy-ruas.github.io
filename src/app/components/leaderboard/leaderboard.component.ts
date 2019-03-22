import { Component, OnInit } from '@angular/core';
import { LeaderboardService } from 'src/app/services/leaderboard.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboard: any[];

  constructor(
    private leaderboardService: LeaderboardService
  ) { }

  ngOnInit() {
        // Fetch the Leaderboard
        this.leaderboardService.getLeaderboardAll()
        .then(data => {
          this.leaderboard = data;
        })
        .catch(console.log);
  }

}
