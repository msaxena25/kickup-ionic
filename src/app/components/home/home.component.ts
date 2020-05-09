import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private placedOrderCount = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() { 
    this.placedOrderCount = this.dataService.getPlacedOrderCount();
  }

}
