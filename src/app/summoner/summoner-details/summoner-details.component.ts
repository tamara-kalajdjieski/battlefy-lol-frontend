import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SummonerService } from '../summoner.service';
import { Summoner } from '../model/summoner.model';

@Component({
  selector: 'app-summoner-details',
  templateUrl: './summoner-details.component.html',
  styleUrls: ['./summoner-details.component.scss']
})

export class SummonerDetailsComponent implements OnChanges {

  @Input() summonerName: string='';
  public summoner: any= null;
  public errorMessage: boolean = false;

  constructor(
    private service: SummonerService
  ) { }


  ngOnChanges(changes: SimpleChanges) {
    const latestSummonerName = changes['summonerName'];

    if(latestSummonerName){
      this.load()
    }
  }

  load() {

    const summonerDetailsObserver = {
      //Simple validation of inputs
      next: (summonerDetails: any) =>{
        if(summonerDetails.name && summonerDetails.puuid && summonerDetails.profileIconId && summonerDetails.summonerLevel && summonerDetails.summonerLevel > 0) {
          this.summoner = new Summoner(summonerDetails.name, summonerDetails.puuid, summonerDetails.profileIconId, summonerDetails.summonerLevel)
          this.errorMessage = false;
        }
        else
        {
          this.summoner = null;
          this.errorMessage = true;
          console.log("Incorrect data read from API.")
        }
      },
      error: (err: Error) => {
        console.log("Observer got an error " + err.message)
      }
    }

    this.service.getSummonerDetails(this.summonerName)
      .subscribe(summonerDetailsObserver);

      }

}
