import React, { Component, Fragment } from 'react';
import { fromEvent } from "rxjs";

import WithViewDogListPage from '../containers/DogListPageWrapper';
import '../components/DogList/DogList.css';
import DogList from '../components/DogList/DogList';
import ErrorWindow from '../components/ErrorWindow/ErrorWindow';

class DogListPage extends Component {
  componentDidMount() {
    const{errorModalClose, getAllBreedsJSON}=this.props;
    errorModalClose();
    getAllBreedsJSON();
    const btn = document.querySelector('.test-btn');
    const getDataRx = fromEvent(btn, 'click');

    getDataRx.subscribe(e => {console.log(e)});
  };

  render() {
    const isServerError = this.props.errorModalOpen.value;
    return (
      <Fragment>
        <button className="test-btn">1111</button>
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
