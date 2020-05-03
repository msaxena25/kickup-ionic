import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toastController: ToastController) { }


  async presentToast(message: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })

    Toast.fire({
      icon: 'success',
      title: message
    })
  }

  hideToast() {
    this.toastController.dismiss();
  }

  // async presentToastWithOptions() {
  //   const toast = await this.toastController.create({
  //     header: 'Toast header',
  //     message: 'Click to Close',
  //     position: 'top',
  //     buttons: [
  //       {
  //         side: 'start',
  //         icon: 'star',
  //         text: 'Favorite',
  //         handler: () => {
  //           console.log('Favorite clicked');
  //         }
  //       }, {
  //         text: 'Done',
  //         role: 'cancel',
  //         handler: () => {
  //           console.log('Cancel clicked');
  //         }
  //       }
  //     ]
  //   });
  //   toast.present();
  // }

}
