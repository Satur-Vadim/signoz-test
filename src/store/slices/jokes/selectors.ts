import type { RootState } from '../../types/TStore';
import IJoke from './interfaces/IJokes';

export const selectStatus = (state: RootState): IJoke['status'] => state.jokes.status;

export const selectJoke = (state: RootState): IJoke['joke'] => state.jokes.joke;
