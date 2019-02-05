import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllBreedsJSON } from '../actions/BreedListAction';
const AppWrapper = Component => {
  const WrappedComponent = props =>
    <Component getAllBreedsJSON = {props.getAllBreedsJSON}
               breeds = {props.breeds} />;

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getAllBreedsJSON : getAllBreedsJSON,
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
