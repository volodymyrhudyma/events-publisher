import { each } from 'lodash';
import { ValueType } from 'react-select/lib/types';
import { Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import categories from 'src/categories.json';
import {
  CATEGORIES,
  CATEGORIES_FULFILLED,
  CATEGORIES_REJECTED,
  EMPLOYEES,
  EMPLOYEES_FULFILLED,
  EMPLOYEES_REJECTED,
} from 'src/constants/action-types';
import employees from 'src/employees.json';
import {
  ICategory,
  IEmployee,
  IHotreeState,
  ISelectGroup,
  ISelectOption,
} from 'src/types';

export const fetchCategories = (): ThunkAction<
  Promise<void>,
  IHotreeState,
  null,
  {
    type: string;
    payload?: ISelectOption[] | string;
  }
> => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: CATEGORIES,
    });
    try {
      const data: ICategory[] = categories;
      dispatch({
        type: CATEGORIES_FULFILLED,
        payload: data.map(item => ({
          label: item.name,
          value: item.id,
        })),
      });
    } catch (error) {
      dispatch({
        type: CATEGORIES_REJECTED,
        payload: error.toString(),
      });
    }
  };
};

export const fetchEmployees = (): ThunkAction<
  Promise<void>,
  IHotreeState,
  null,
  {
    type: string;
    payload?: Array<ValueType<ISelectGroup>> | string;
  }
> => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: EMPLOYEES,
    });
    try {
      const data: IEmployee[] = employees;
      const me: ISelectGroup = {
        label: 'Me',
        options: [],
      };
      const other: ISelectGroup = {
        label: 'Other',
        options: [],
      };
      each(data, item => {
        const value = item.id.toString();
        const label = `${item.name} ${item.lastname}`;
        if (item.id === 3) {
          me.options.push({ value, label, extraData: item.email });
        } else {
          other.options.push({ value, label, extraData: item.email });
        }
      });
      dispatch({
        type: EMPLOYEES_FULFILLED,
        payload: [me, other],
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEES_REJECTED,
        payload: error.toString(),
      });
    }
  };
};
