import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.scss'],
})
export class AddJobComponent implements OnInit {
  @Input() jobData: any;
  job: any = {isActive: true};
  allJobs: any = [];
  showJobsList = false;
  searchText: string = '';

  constructor(private modalController: ModalController, private dataService: DataService,  private toastService: ToastService) { }

  ngOnInit() {
    if(this.jobData) {
      this.job = this.jobData;
    }
    this.allJobs = this.dataService.getJobsList();
  }

  onSearchJob() {
    this.job.jobCode = '';
    this.showJobsList = true;
    setTimeout(() => {
      const searchInput: any = document.getElementById('search-input');
      searchInput.firstElementChild.focus();
    }, 10);
  }

  onSelectJob(job) {
    this.job.jobCode = job.jobCode;
    this.job.jobTitle = job.title;
    this.showJobsList = false;
  }

  onSave() {
    this.toastService.presentToast('Job added successfully!')
    this.dismissModal();
  }

  dismissModal() {
    this.modalController.dismiss({ data: this.job })
  }

} 
