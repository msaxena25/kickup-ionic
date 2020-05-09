import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ModalController } from '@ionic/angular';
import { AddJobComponent } from '../add-job/add-job.component';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-provider-jobs',
  templateUrl: './provider-jobs.component.html',
  styleUrls: ['./provider-jobs.component.scss'],
})
export class ProviderJobsComponent implements OnInit {
  private providerJobs: any = [];
  constructor(private dataService: DataService, public modalController: ModalController, private toastService: ToastService) { }

  ngOnInit() {
    this.providerJobs = this.dataService.getProviderJobs();
    console.log(this.providerJobs);
  }

  async onAdd(job?, index: number = -1) {
    const modal = await this.modalController.create({
      component: AddJobComponent, componentProps: {
        jobData: job
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    if (job) {
      this.providerJobs.splice(index, 1, data.data);

    } else {
      this.providerJobs.push(data.data);
    }

  }

  private onEdit(job: any, index: number) {
    this.onAdd(job, index);
  }

  private onRemove(index: number) {
    this.providerJobs.splice(index, 1);
    this.toastService.presentToast('Job removed!');
  }

}
