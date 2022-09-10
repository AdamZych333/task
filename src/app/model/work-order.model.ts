import { IAssignedTo } from "./assigned-to.model";

export interface IWorkOrder{
    work_order_id: number,
    description: string,
    received_date: Date,
    assigned_to: IAssignedTo[],
    status: string,
    priority: string,
  }