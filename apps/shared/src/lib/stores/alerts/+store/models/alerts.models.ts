export enum AlertType {
  Success = 0,
  Warning = 1,
  Error = 2,
  Info = 3,
  Sticky = 4
}

export interface AlertInterface {
  id: number;
  message: string;
  type: AlertType;
  duration?: number; 
}
