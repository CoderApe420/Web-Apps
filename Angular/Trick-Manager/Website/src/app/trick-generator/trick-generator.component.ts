import { Component } from '@angular/core';
import {DataDisplayComponent} from "../data-display/data-display.component";

@Component({
  selector: 'app-trick-generator',
  standalone: true,
  imports: [
    DataDisplayComponent
  ],
  templateUrl: './trick-generator.component.html',
  styleUrl: './trick-generator.component.scss'
})
export class TrickGeneratorComponent {

}
