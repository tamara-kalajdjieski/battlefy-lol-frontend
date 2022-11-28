import { Component, Input, SimpleChanges } from '@angular/core';
import { MatchDetails } from '../model/match-details.model';
import { SummonerService } from '../summoner.service';

@Component({
  selector: 'app-match-list',
  templateUrl: './match-list.component.html',
  styleUrls: ['./match-list.component.scss']
})
export class MatchListComponent {
  @Input() puuid: string='';
  matches: Array<any> = [];
  constructor(
    private service: SummonerService
  ) { }


  ngOnChanges(changes: SimpleChanges) {
    const latestPuuid = changes['puuid'];

    if(latestPuuid){
      this.getMatches()
    }
  }


  getMatches() {

    const matchesObserver = {
      next: (matchesDetails: any) =>{
        
        let matches: Array<any> = []

        matchesDetails.forEach((m:any) => {
          //Validation done also on server side, but there should be a more extensive one here as well.
          if(m.outcome && m.gameDuration && m.gameType &&
            m.gameMode && m.defencePerks && m.offencePerks &&
            m.flexPerks && m.championId && m.championName &&
            m.championLevel && m.kills && m.deaths &&
            m.assists && m.items && m.totalCreepScore &&
            m.goldEarned)
            {
              
              this.service.getChampionSpellInformation(m.championName).subscribe({
                next: (summonerDetails: any) =>{
                  let spells = summonerDetails.data[m.championName].spells
                  spells = spells.map((s:any) => s.id)
                  
                  matches.push(
                    new MatchDetails(
                      m.outcome,
                      m.gameDuration,
                      m.gameType,
                      m.gameMode,
                      m.defencePerks,
                      m.offencePerks,
                      m.flexPerks,
                      m.championId,
                      m.championName,
                      m.championLevel,
                      spells,
                      m.kills,
                      m.deaths,
                      m.assists,
                      m.items,
                      m.totalCreepScore,
                      m.goldEarned
                    )
                  )
                }
              })

            }
            else
            {
              console.log("Incorrect data read from API for match: " + m)
            }
        });
        this.matches = matches;
      },
      error: (err: Error) => {
        console.log("Observer got an error " + err.message)
      }
    }

    this.service.getMatchDetails(this.puuid, 5)
      .subscribe(matchesObserver);

      }


}
