import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search-provider',
  templateUrl: './search-provider.component.html',
  styleUrls: ['./search-provider.component.scss'],
})
export class SearchProviderComponent implements OnInit {
  providerList: any = [];

  constructor(private modalController: ModalController, private router: Router, private dataService: DataService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.providerList = this.dataService.getProvidersList();
  }

  onPlaceRequest() {
    //this.presentModal();
    const orderId = Math.floor(Math.random() * 1000000);
    Swal.fire(
      {
        title: 'Success',
        text: 'You request has been placed. Request No. is ' + orderId,
        icon: 'success',
        heightAuto: false,
        confirmButtonText: 'View'
      }).then((result) => {
        if (result.value) {
          this.router.navigateByUrl('/customer/order');
        }
      })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: '',
      componentProps: {
        providerInfo: this.providerList[0]
      }
    });
    return await modal.present();
  }

}
