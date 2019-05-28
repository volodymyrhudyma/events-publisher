import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { fetchCategories, fetchEmployees } from 'src/actions/hotree';
import { IAppState } from 'src/types';
import Component from './App';

const mapStateToProps = (state: IAppState) => ({
  categories: state.hotree.categories.data,
  employees: state.hotree.employees.data,
});

/* tslint:disable-next-line */
const mapDispatchToProps = (dispatch: any) => {
  return {
    fetchCategories: () => dispatch(fetchCategories()),
    fetchEmployees: () => dispatch(fetchEmployees()),
  };
};

export default withTranslation()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Component)
);
