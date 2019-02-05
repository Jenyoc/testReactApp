import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBreedsJSON } from '../actions/BreedListAction';
import { getDataRx } from "../actions/BreedListAction";

const AppWrapper = Component => {
  const WrappedComponent = props =>
    <Component getAllBreedsJSON = {props.getAllBreedsJSON}
               getDataRx = {props.getDataRx}
               breeds = {props.breeds} />;

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getAllBreedsJSON : getAllBreedsJSON,
        getDataRx: getDataRx,
      },
      dispatch,
    );
  const mapStateToProps = state => {
    return {
      breeds : state.breeds,
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent);
};

export default AppWrapper;
