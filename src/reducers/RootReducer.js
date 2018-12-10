import { combineReducers } from 'redux';
import AllBreedsReducer from './AllBreedsReducer';
import BreedImageReducer from './BreedImageReducer'
import CurrentBreedReducer from './CurrentBreedReducer';
import ErrorModalReducer from './ErrorModalReducer';
import RedirectReducer from './RedirectReducer';


const RootReducer = combineReducers({
  breeds: AllBreedsReducer,
  breedImage: BreedImageReducer,
  currentBreed: CurrentBreedReducer,
  errorModalOpen: ErrorModalReducer,
  isRedirect: RedirectReducer,
});

export default RootReducer;