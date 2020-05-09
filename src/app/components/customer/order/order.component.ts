import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { RequestStatus } from 'src/app/enums/request-status.enum';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  private orders: any = [];
  private cancelReasons: any = [];
  private cancelReasonsObject: any = {};
  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.orders = this.dataService.getOrders();
    this.cancelReasons =  this.dataService.getCancelReasons();
    this.cancelReasons.forEach(element => {
        this.cancelReasonsObject[element.id] =  element.reason;
    });
  }

  async onOrderCancel(index: number) {
    
    const { value } = await Swal.fire({
      title: 'Select Reason to Cancel Request',
      input: 'select',
      inputOptions: this.cancelReasonsObject,
      customClass: {
        title: 'title-class'
      },
      inputPlaceholder: 'Select a reason',
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            this.orders[index].status = RequestStatus.Cancelled;
            resolve()
          } else {
            resolve('You need to select a reason :(')
          }
        })
      }
    })

    // if (fruit) {
    //   Swal.fire(`You selected: ${fruit}`)
    // }
  }

  private onStatusClick(statusId) {
    if (statusId === RequestStatus.Placed) {

      Swal.fire(
        {
          title: 'Is your work done?',
          heightAuto: false,
          confirmButtonText: 'Mark Status Done'
        }).then((result) => {
          if (result.value) {
          }
        })

    }
  }

}
