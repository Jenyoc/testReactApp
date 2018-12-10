import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './DogList.css';

const DogList = ({breedImage, currentBreed, breeds, setCurrentBreed, getBreedImagesJSON}) => {

  let cardFocusHandle = (event) => {
    const currentBreed = event.target.dataset.breed;
    if (event.target.classList.contains('dogCard') || event.target.classList.contains('dogList')) {
      const elements = document.getElementsByClassName('dogCard');
      let elementsArr = Object.values(elements);
      elementsArr.map(el => el.classList.remove('translateRight', 'translateLeft'));
      setCurrentBreed(currentBreed);
      if (currentBreed) {
        setCurrentBreed(currentBreed);
        event.target.offsetLeft < document.body.clientWidth-document.body.clientWidth/3
        ? event.target.classList.add('translateRight')
        : event.target.classList.add('translateLeft');
        getBreedImagesJSON(currentBreed, true);
      }
    }
  };

  let linkHandle = () => {
    getBreedImagesJSON(currentBreed.value);
  };

  let breadsArrKeys = Object.keys(breeds.list);

  return (
    <div className="dogList"
         onMouseOver={cardFocusHandle}
         onClick={cardFocusHandle}>
      {breadsArrKeys.length ? breadsArrKeys.map(el =>
        <div key={el}
             data-breed={el}
             className='dogCard'>
          {el}
          {el === currentBreed.value
           && <Fragment>
              <div className="imgContainer">{breedImage.value.length
                ? <img className="breedImage"
                       alt=' '
                       src={breedImage.value} />
                : <div className="loader" />}
              </div>
              <Link className="infoBtn"
                    to="/breed-info"
                    data-breed={el}
                    onClick={linkHandle}>
                More info
              </Link>
            </Fragment>}
        </div>) : 'loading...'}
    </div>
  )
};

export default DogList;
