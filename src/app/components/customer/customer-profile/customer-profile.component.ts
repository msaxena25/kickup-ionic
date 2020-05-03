import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  customer: any = {};
  isReadOnly = true;

  constructor(private dataService: DataService, private toastService: ToastService) { }

  ngOnInit() {
    this.customer = this.dataService.getCustomer('101');
    console.log(this.customer);

  }

  onEdit() {
    this.isReadOnly = false;

  }

  onSaveProfile() {

    this.toastService.presentToast('Saved successfully!')
    this.isReadOnly =  true;
  }

}
