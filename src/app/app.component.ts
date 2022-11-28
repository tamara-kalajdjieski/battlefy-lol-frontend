import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  summonerName: string = '';
  summonerNameInput: string = ''

  search() {
    this.summonerNameInput = this.summonerName
    
  }
}

