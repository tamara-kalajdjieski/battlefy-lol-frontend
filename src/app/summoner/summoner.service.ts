import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../environments/environment';

@Injectable()
export class SummonerService {

  private http: HttpClient;

  private headerOptions = {
    'Content-Type': 'application/json',
  }

  constructor(http: HttpClient) {
    this.http = http;
  }
  

  getSummonerDetails(summonerName: string) {
    const url = environment.apiUrl + '/summoner_details/' + summonerName
    return this.http.get(url);
  }

  getMatchDetails(id: string, count: number) {
    const url = environment.apiUrl + '/matches_for_summoner/' + id + '/' + count
    return this.http.get(url);
  }

  getChampionSpellInformation(championName: string){
    return this.http.get("assets/static_data/champion/" + championName +".json")
  }
  
}
