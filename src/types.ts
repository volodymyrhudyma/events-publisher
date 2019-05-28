import { ReactNode } from 'react';

export interface IFormControlProps {
  /* tslint:disable-next-line */
  children?: any;
  label?: string;
  required: boolean;
  hint?: ReactNode;
  error?: string;
  maxLength?: number;
  currentLength?: number;
}

export interface ISelectGroup {
  label: string;
  options: ISelectOption[];
}

export interface ISelectOption {
  value: string;
  label: string | ReactNode;
  extraData?: string;
}

export interface ICategory {
  id: number;
  name: string;
}

export interface IEmployee {
  id: number;
  name: string;
  lastname: string;
  email: string;
}

export interface IFetchState<T> {
  fetching: boolean;
  error?: string;
  data: T[];
}

export interface IAppState {
  hotree: IHotreeState;
}

export interface IHotreeState {
  categories: IFetchState<ISelectOption>;
  employees: IFetchState<ISelectOption>;
}

export interface IValidationRule {
  name: string;
  required?: boolean;
  email?: boolean;
}

export interface IResult {
  title: string;
  description: string;
  category_id: number;
  paid_event: boolean;
  event_fee: number;
  reward: number;
  date: string;
  duration: number;
  coordinator: IResultCoordinator;
}

interface IResultCoordinator {
  id: string;
  email: string;
}
