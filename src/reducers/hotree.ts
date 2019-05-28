import {
  CATEGORIES,
  CATEGORIES_FULFILLED,
  CATEGORIES_REJECTED,
  EMPLOYEES,
  EMPLOYEES_FULFILLED,
  EMPLOYEES_REJECTED,
} from 'src/constants/action-types';
import { IFetchState, ISelectOption } from 'src/types';

export interface IHotreeState {
  categories: IFetchState<ISelectOption>;
  employees: IFetchState<ISelectOption>;
}

const initialState: IHotreeState = {
  categories: {
    fetching: false,
    error: undefined,
    data: [],
  },
  employees: {
    fetching: false,
    error: undefined,
    data: [],
  },
};

/* tslint:disable-next-line */
export default (state = initialState, action: any) => {
  switch (action.type) {
    case CATEGORIES:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: true,
        },
      };
    case CATEGORIES_FULFILLED:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: false,
          error: undefined,
          data: action.payload,
        },
      };
    case CATEGORIES_REJECTED:
      return {
        ...state,
        categories: {
          ...state.categories,
          fetching: false,
          error: action.payload,
          data: [],
        },
      };
    case EMPLOYEES:
      return {
        ...state,
        employees: {
          ...state.employees,
          fetching: true,
        },
      };
    case EMPLOYEES_FULFILLED:
      return {
        ...state,
        employees: {
          ...state.employees,
          fetching: false,
          error: undefined,
          data: action.payload,
        },
      };
    case EMPLOYEES_REJECTED:
      return {
        ...state,
        employees: {
          ...state.employees,
          fetching: false,
          error: action.payload,
          data: [],
        },
      };
    default:
      return {
        ...state,
      };
  }
};
