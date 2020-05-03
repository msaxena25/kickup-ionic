import { Component, OnInit } from '@angular/core';
import jobs from '../../../assets/data/jobs.json';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss'],
})
export class JobListComponent implements OnInit {
  jobs: any = [];
  searchText: string = '';
  showSearchBox = false;

  constructor() { }

  ngOnInit() {
    console.log(jobs);
    this.jobs = jobs;
    
  }

  onSearchBtnClick() {
    this.showSearchBox = !this.showSearchBox;
    this.searchText = '';
    setTimeout(() => {
      const searchInput: any= document.getElementById('search-input'); 
      searchInput.firstElementChild.focus();
    }, 100);
   

  }

}
