import {Component, inject, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-data-display',
  standalone: true,
  imports: [
    NgForOf,
    HttpClientModule,
    NgClass
  ],
  templateUrl: './data-display.component.html',
  styleUrl: './data-display.component.scss'
})
export class DataDisplayComponent {
  @Input() page: any;

  private httpClient = inject(HttpClient);

  isDropdownActive = false;

  selectedType = '';
  randomTrick  = '';

  allTricksOfType: any[] = [];

  data: any[] = [];

  //Replace types with database values
  trick_types = [
    {type: "Basic Tricks", value: "basic"},
    {type: "Flip and Shove-It Tricks", value: "flip"},
    {type: "Grind and Slide Tricks", value: "grind"},
    {type: "Air, Grab, Bowl and Ramp Tricks", value: "air"},
    {type: "Footplant Tricks", value: "footplant"},
    {type: "Balance Tricks", value: "balance"},
    {type: "Freestyle Tricks", value: "freestyle"}
  ]

  constructor() { }
  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient.get('http://localhost:3000/skate_tricks')
      .subscribe((tricks: any) => {
        this.data = tricks;
      });
  }

  getAllTricksOfType(){
    let index = 0;
    this.allTricksOfType = [];

    for (let trick of this.data){
      if(trick.trick_type == this.selectedType){

        this.allTricksOfType[index] = trick.trick_name;
        index++;

      }
    }

    this.randomTrick = (this.allTricksOfType[this.getRandomInt(this.allTricksOfType.length)]);

  }

  getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

}

