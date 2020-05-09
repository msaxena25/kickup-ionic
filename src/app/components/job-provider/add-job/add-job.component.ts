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
  @Input() private jobData: any;
  private job: any = {isActive: true};
  private allJobs: any = [];
  private showJobsList = false;
  private searchText: string = '';

  constructor(private modalController: ModalController, private dataService: DataService,  private toastService: ToastService) { }

  ngOnInit() {
    if(this.jobData) {
      this.job = this.jobData;
    }
    this.allJobs = this.dataService.getJobsList();
  }

  private onSearchJob() {
    this.job.jobCode = '';
    this.showJobsList = true;
    setTimeout(() => {
      const searchInput: any = document.getElementById('search-input');
      searchInput.firstElementChild.focus();
    }, 10);
  }

  private onSelectJob(job) {
    this.job.jobCode = job.jobCode;
    this.job.jobTitle = job.title;
    this.showJobsList = false;
  }

  private onSave() {
    this.toastService.presentToast('Job added successfully!')
    this.dismissModal();
  }

  private dismissModal() {
    this.modalController.dismiss({ data: this.job })
  }

} 
