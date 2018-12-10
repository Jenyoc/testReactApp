import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getBreedImagesJSON } from '../actions/ImagesByBreedAction';
import { setCurrentBreed, getAllBreedsJSON, errorModalClose } from '../actions/BreedListAction';

const DogListPageWrapper = Component => {
  const WrappedComponent = props =>
    <Component breeds={props.breeds}
               getBreedImagesJSON={props.getBreedImagesJSON}
               breedImage={props.breedImage}
               currentBreed={props.currentBreed}
               setCurrentBreed={props.setCurrentBreed}
               getAllBreedsJSON={props.getAllBreedsJSON}
               errorModalOpen={props.errorModalOpen}
               errorModalClose={props.errorModalClose} />;

  const mapDispatchToProps = dispatch =>
    bindActionCreators({
        getBreedImagesJSON: getBreedImagesJSON,
        setCurrentBreed: setCurrentBreed,
        getAllBreedsJSON: getAllBreedsJSON,
        errorModalClose:  errorModalClose,
      },
      dispatch,
    );
  const mapStateToProps = state => {
    return {
      breeds : state.breeds,
      breedImage: state.breedImage,
      currentBreed: state.currentBreed,
      errorModalOpen: state.errorModalOpen,
    };
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(WrappedComponent);
};

export default DogListPageWrapper;