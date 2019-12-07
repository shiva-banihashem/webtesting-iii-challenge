import { UPDATE_TITLE } from "../actions";

export const initialState = {
  title: "Update the title based on your actions for the Gate!!!",
  editing: false,
  
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case "TOGGLE_EDITING":
    //   return {
    //     ...state,
    //     editing: !state.editing
    //   };
    case UPDATE_TITLE:
      return {
        ...state,
        title: action.payload,
        editing: !state.editing
      };
    
    default:
      return state;
  }
};

