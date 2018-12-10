import { ErrorModalOpen } from './BreedListAction';

export const ImagesListByBreed = json => {
  return {
    type: 'BREED_IMAGE',
    payload: {
      value: json || {},
    },
  };
};

export const GetImagesByBreedError = () => ErrorModalOpen(true);

export const getBreedImagesJSON = (breed, isRandom) => {
  let lastPartOfLink;
  isRandom ? lastPartOfLink = '/random' : lastPartOfLink = '';
  const uri = 'https://dog.ceo/api/breed/' + breed.toLowerCase() + '/images' + lastPartOfLink;
  return dispatch => {
    dispatch(ImagesListByBreed());
    return fetch(uri)
      .then(response => {
        if (!response.ok) {
          throw Error()
        }
        return response.json();
      })
      .then(post => {
        ErrorModalOpen(false);
        return dispatch(ImagesListByBreed(post.message));
      })
      .catch(() => dispatch(GetImagesByBreedError()));
  };
};