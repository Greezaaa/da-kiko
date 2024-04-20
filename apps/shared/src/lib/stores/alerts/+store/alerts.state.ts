import { EntityState } from '@ngrx/entity';
import { AlertInterface } from './models/alerts.model';

export interface NotificationsState extends EntityState<AlertInterface> {
  loading: [];
}