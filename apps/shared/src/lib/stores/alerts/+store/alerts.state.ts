import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { AlertInterface } from './models/alerts.models';

export interface NotificationsState extends EntityState<AlertInterface> {
  loading: [];
}