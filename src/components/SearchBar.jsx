import React from 'react';

const SearchBar = ({setCurrentBreed, getBreedImagesJSON, errorModalClose, redirectSet, isRedirect}) => {

  const pressHandle = (event) => {
    if (event.key === 'Enter') {
      setCurrentBreed(event.target.value);
      getBreedImagesJSON(event.target.value);
      errorModalClose();
      redirectSet(true);
      isRedirect.value && redirectSet(false);
    }
  };
  return (
    <input className="breedInput"
           onKeyPress={pressHandle}
           type="text"
           placeholder="Search..." />
  )
};

export default SearchBar;
