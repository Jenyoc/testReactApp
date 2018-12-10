import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './BreedInfo.css';

class BreedInfo extends Component {
  constructor() {
    super();
    this.state = {
      slide: 0,
    };
  };

  componentDidMount(){
    const {redirectSet} = this.props;
    redirectSet(false);
  };

  toLeft=()=>{
    const {breedImage} = this.props;
    let {slide} = this.state;
    let imageArrLength = breedImage.value.length - 1;
    slide > 0 ?
    this.setState({slide: slide - 1}) :
    this.setState({slide: imageArrLength});
  };

  toRight=()=>{
    const {breedImage} = this.props;
    let {slide} = this.state;
    let imageArrLength = breedImage.value.length - 1;
    slide < imageArrLength ?
      this.setState({slide: slide + 1}) :
      this.setState({slide: 0});
  };

  render() {
    const {currentBreed, breedImage} = this.props;
    let {slide} = this.state;
    return (
      <div className="breedInfo">
        {currentBreed.value
        ? <div className="directionColumn">
            <h1 className='breedName'>{breedImage.value.length ? currentBreed.value : ''}</h1>
            <div className="directionRow">
              <button className="arrow left"
                      onClick={this.toLeft}>
                &lt;</button>
              <div className="imageContainer">
                {breedImage.value.length
                  ? <img src={breedImage.value[slide]}
                       className="currentBreedImage"
                       alt={currentBreed.value} />
                  : <div className="loader" />}
              </div>
              <button className="arrow right"
                      onClick={this.toRight}>
                &gt;</button>
            </div>
          </div>
        : <Redirect to="/breed-list" />}
      </div>
    )
  }
}

export default BreedInfo;
