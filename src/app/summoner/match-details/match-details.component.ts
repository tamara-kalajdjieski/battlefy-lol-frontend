import { Component, Input } from '@angular/core';
import { MatchDetails } from '../model/match-details.model';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.scss']
})
export class MatchDetailsComponent {

  @Input() match: MatchDetails = null as any;
}
