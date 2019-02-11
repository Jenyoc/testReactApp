import React, { Component, Fragment } from 'react';
import { fromEvent, of, Observable} from "rxjs";

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

    data$ = Observable.create(this.props.getAllBreedsJSON);
    btn$ = fromEvent(document, 'mousemove');
    num$ = 5;
    streams = null;

  componentDidMount() {
    const { errorModalClose } = this.props;
    errorModalClose();

    this.streams = [
        this.data$.subscribe(),
        this.btn$.subscribe(e => {this.setState({coords:{
                x: e.clientX, y: e.clientY
            }})}),
        of(this.num$).subscribe(
            x => console.log(x),
            err => console.log(err),
            () => console.log('complete')
        )
    ];
  };

  componentWillUnmount() {
      this.streams.map(stream => stream.unsubscribe());
  }

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
