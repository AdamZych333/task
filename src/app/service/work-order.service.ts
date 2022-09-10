import { Injectable } from '@angular/core';
import { IWorkOrder } from '../model/work-order.model';
import * as workOrders from '../data/work-order-data.json';

@Injectable({
  providedIn: 'root'
})
export class WorkOrderService {

  getOrders(): Promise<IWorkOrder[]>{
    return new Promise(resolve => {
      const res = (workOrders as any).default;
      const data: IWorkOrder[] = res.response.data;

      setTimeout(() => {
        resolve(data);
      }, 200);
    });
  }

  searchOrdersByDescription(query: string): Promise<IWorkOrder[]>{
    return new Promise(resolve => {
      const res = (workOrders as any).default;
      const data: IWorkOrder[] = res.response.data;
      const filteredData: IWorkOrder[] = data.filter(workOrder => 
        workOrder.description.toLowerCase().includes(query.toLowerCase())
      );

      setTimeout(() => {
        resolve(filteredData);
      }, 200);
    })
  }

}
