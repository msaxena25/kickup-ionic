import { Pipe, PipeTransform } from '@angular/core';
import { RequestStatus } from '../enums/request-status.enum';
@Pipe({
  name: 'requestStatus'
})
export class RequestStatusPipe implements PipeTransform {
  transform(statusId: number): string {
   if (!statusId) return '';

    return RequestStatus[statusId];
  }
}