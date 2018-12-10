import React from 'react';
import '../components/BreedInfo/BreedInfo.css';

import withViewBreedInfoPage from '../containers/BreedInfoPageWrapper';
import BreedInfo from '../components/BreedInfo/BreedInfo';
import ErrorWindow from '../components/ErrorWindow/ErrorWindow';

const BreedInfoPage = ({currentBreed, breedImage, errorModalOpen, redirectSet}) => {
  let isServerError = errorModalOpen.value;
  return (
    <div className="breedInfoPage">
      {!isServerError
        ? <BreedInfo currentBreed={currentBreed}
                   breedImage={breedImage}
                   redirectSet={redirectSet} />
        : <ErrorWindow />}
    </div>
  )
};

export default withViewBreedInfoPage(BreedInfoPage);