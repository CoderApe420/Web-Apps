import { Component } from '@angular/core';
import {DataDisplayComponent} from "../data-display/data-display.component";

@Component({
  selector: 'app-trick-overview',
  standalone: true,
  imports: [
    DataDisplayComponent
  ],
  templateUrl: './trick-overview.component.html',
  styleUrl: './trick-overview.component.scss'
})
export class TrickOverviewComponent {

}
