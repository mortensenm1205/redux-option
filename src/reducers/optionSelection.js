import { OPTION_SELECTION } from '../constants/action-types';

const initialState = {
  currentOption: "option1"
}

export const optionSelect = (state = initialState, action) => {
  switch (action.type) {
    case OPTION_SELECTION:
      //This returns a copy of state while updating currentOption
      const option = action.payload
      return Object.assign({}, state, { currentOption: option});
    default:
      return state;
  }
}
