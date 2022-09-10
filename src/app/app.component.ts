import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WorkOrderService } from './service/work-order.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  workOrders$ = this.workOrderService.getOrders();
  searchForm = new FormControl('');

  constructor(
    private workOrderService: WorkOrderService,
  ){}

  onSearch(): void {
    this.workOrders$ = this.workOrderService.searchOrdersByDescription(this.searchForm.value);
  }
  
}
