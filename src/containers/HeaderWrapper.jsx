import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { errorModalClose, setCurrentBreed } from '../actions/BreedListAction';
import { getBreedImagesJSON } from '../actions/ImagesByBreedAction';
import { redirectSet } from '../actions/redirectAction';

const HeaderWrapper = Component => {
  const WrappedComponent = props =>
    <Component setCurrentBreed={props.setCurrentBreed}
               currentBreed={props.currentBreed}
               getBreedImagesJSON={props.getBreedImagesJSON}
               errorModalClose={props.errorModalClose}
               redirectSet={props.redirectSet}
               isRedirect={props.isRedirect} />;

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        setCurrentBreed: setCurrentBreed,
        getBreedImagesJSON: getBreedImagesJSON,
        errorModalClose: errorModalClose,
        redirectSet : redirectSet,
      },
      dispatch,
    )
  ;
  const mapStateToProps = state => {
    return {
      currentBreed: state.currentBreed,
      isRedirect: state.isRedirect,
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default HeaderWrapper;