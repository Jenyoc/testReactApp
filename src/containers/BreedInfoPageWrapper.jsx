import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBreedImagesJSON } from '../actions/ImagesByBreedAction';
import { errorModalClose } from '../actions/BreedListAction';
import { redirectSet } from '../actions/redirectAction';

const BreedInfoPageWrapper = Component => {
  const WrappedComponent = props =>
    <Component breedImage={props.breedImage}
               subBreeds={props.subBreeds}
               getBreedImagesJSON={props.getBreedImagesJSON}
               currentBreed={props.currentBreed}
               errorModalOpen={props.errorModalOpen}
               errorModalClose={props.errorModalClose}
               redirectSet={props.redirectSet} />;

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getBreedImagesJSON: getBreedImagesJSON,
        errorModalClose: errorModalClose,
        redirectSet: redirectSet,
      },
      dispatch,
    );
  const mapStateToProps = state => {
    return {
      breedImage: state.breedImage,
      subBreeds: state.subBreeds,
      currentBreed: state.currentBreed,
      errorModalOpen: state.errorModalOpen,
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps,
  )(WrappedComponent);
};

export default BreedInfoPageWrapper;