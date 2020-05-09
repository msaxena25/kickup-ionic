import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  private jobs: any = [];
  private searchText: string = '';
  private showSearchBox = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.jobs = this.dataService.getJobsList();

  }

  private onSearchBtnClick() {
    this.showSearchBox = !this.showSearchBox;
    this.searchText = '';
    setTimeout(() => {
      const searchInput: any = document.getElementById('search-input');
      searchInput.firstElementChild.focus();
    }, 100);


  }

}
