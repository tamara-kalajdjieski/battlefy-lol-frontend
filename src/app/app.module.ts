import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SummonerDetailsComponent } from './summoner/summoner-details/summoner-details.component';
import { SummonerService } from './summoner/summoner.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { MatchDetailsComponent } from './summoner/match-details/match-details.component';
import { MatchListComponent } from './summoner/match-list/match-list.component';


@NgModule({
  declarations: [
    AppComponent,
    SummonerDetailsComponent,
    MatchDetailsComponent,
    MatchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgHttpLoaderModule.forRoot()
  ],
  providers: [
    HttpClient,
    SummonerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
