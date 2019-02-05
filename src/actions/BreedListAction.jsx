export const getBreedList = json => {
  return {
    type: 'ALL_BREEDS_LIST',
    payload: {
      list: json || {},
    },
  };
};

export const ErrorModalOpen = val => {
  return {
    type: 'ERROR_MODAL_OPEN',
    payload: {
      value: val,
    },
  };
};

export const errorModalClose = () => ErrorModalOpen(false);

export const getCurrentBreed = currentBreed => {
  return {
    type: 'CURRENT_BREED',
    payload: {
      value: currentBreed,
    },
  };
};

export const setCurrentBreed = currentBreed => getCurrentBreed(currentBreed);

export const getAllBreedsError = () => ErrorModalOpen(true);

export const getAllBreedsJSON = () => {
  const uri = 'https://dog.ceo/api/breeds/list/all';
  return dispatch => {
    dispatch(getBreedList());
    return fetch(uri)
      .then(response => {
        if (!response.ok) {
          throw Error()
        }
        return response.json();
      })
      .then(post => {
        return dispatch(getBreedList(post.message));
      })
      .catch(() => dispatch(getAllBreedsError()));
  };
};
