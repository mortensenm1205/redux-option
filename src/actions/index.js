import { OPTION_SELECTION } from '../constants/action-types';

export const optionSelection = (option) => {
  return {
    type: OPTION_SELECTION,
    payload: option
  }
}
