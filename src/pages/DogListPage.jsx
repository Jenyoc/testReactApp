import React, { Component, Fragment } from 'react';
import { fromEvent } from "rxjs";

import WithViewDogListPage from '../containers/DogListPageWrapper';
import '../components/DogList/DogList.css';
import DogList from '../components/DogList/DogList';
import ErrorWindow from '../components/ErrorWindow/ErrorWindow';

class DogListPage extends Component {
    state = {
      coords:{
          x: 0,
          y: 0,
      }
    };
  componentDidMount() {
    const{errorModalClose, getAllBreedsJSON}=this.props;
    errorModalClose();
    getAllBreedsJSON();

    const btn$ = fromEvent(document, 'mousemove');

    btn$.subscribe(e => {this.setState({coords:{
        x: e.clientX, y: e.clientY
        }})});
  };

  render() {
    const isServerError = this.props.errorModalOpen.value;
    return (
      <Fragment>
          <h1>X:{this.state.coords.x} Y:{this.state.coords.y}</h1>
        <button className="test-btn">1111</button>
          <input type="text" className="test-text" />
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
