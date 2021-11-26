import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {

  constructor() { }
  
  @Input()
  rating:number =0;

  starWidth: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75/ 5;
  }

  ngOnInit(): void {
  }

}
