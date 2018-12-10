import React, { Component, Fragment } from 'react';

import WithViewDogListPage from '../../containers/DogListPageWrapper';
import './DogsListPage.css';
import DogList from '../../components/DogList';
import ErrorWindow from '../../components/ErrorWindow';

class DogListPage extends Component {
  componentDidMount() {
    const{errorModalClose, getAllBreedsJSON}=this.props;
    errorModalClose();
    getAllBreedsJSON();
  };

  render() {
    const isServerError = this.props.errorModalOpen.value;
    return (
      <Fragment>
        {!isServerError
        ? <DogList breedImage={this.props.breedImage}
                   currentBreed={this.props.currentBreed}
                   breeds={this.props.breeds}
                   setCurrentBreed={this.props.setCurrentBreed}
                   getBreedImagesJSON={this.props.getBreedImagesJSON} />
        : <ErrorWindow errorModalClose={this.props.errorModalClose} />}
      </Fragment>
    )
  };
}

export default WithViewDogListPage(DogListPage);
