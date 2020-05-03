import { Injectable } from '@angular/core';
import orders from '../../assets/data/customer-requests.json';
import customers from '../../assets/data/customers.json';
import providers from '../../assets/data/service-providers.json';
import cancelReasons from '../../assets/data/cancel-reasons.json';
import { RequestStatus } from '../enums/request-status.enum';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getOrders() {
    return orders;
  }

  getPlacedOrderCount() {
    const placedOrders = orders.filter(order => order.status === RequestStatus.Placed);
    return placedOrders.length;
  }

  getCustomer(id: string) {
    return customers.find(customer => customer.id === id);
  }

  getProvidersList() {
    const allProviders = providers;
    const placedOrdersList = orders.filter(order => order.status === RequestStatus.Placed).map(item => item.serviceProviderId);
    allProviders.forEach(element => {
      if (placedOrdersList.includes(Number(element.id))) {
        element['isOrderPlaced'] = true;
      }
    });
    return allProviders;
  }

  getCancelReasons() {
    return cancelReasons;
  }

}
