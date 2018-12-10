import React from 'react';
import './BreedInfoPage.css';

import withViewBreedInfoPage from '../../containers/BreedInfoPageWrapper';
import BreedInfo from '../../components/BreedInfo';
import ErrorWindow from '../../components/ErrorWindow';

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