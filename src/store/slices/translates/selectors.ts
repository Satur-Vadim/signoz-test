import { RootState } from '../../types/TStore';
import ITranslate from './interfaces/ITranslates';

export const selectLocale = (state: RootState): ITranslate['locale'] => state.translates.locale;

export const selectStatus = (state: RootState): ITranslate['status'] => state.translates.status;
