import { Injectable } from '@angular/core';

import cancelReasons from '../../assets/data/cancel-reasons.json';
import orders from '../../assets/data/customer-requests.json';
import customers from '../../assets/data/customers.json';
import jobsList from '../../assets/data/jobs.json';
import providerJobs from '../../assets/data/provider-jobs.json';
import providers from '../../assets/data/service-providers.json';
import { RequestStatus } from '../enums/request-status.enum';

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

  getJobsList() {
    return jobsList;
  }

  getProviderJobs() {
    return providerJobs;
  }

}
