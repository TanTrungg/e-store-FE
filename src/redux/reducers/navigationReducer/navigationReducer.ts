import { NAVIGATE } from "@/redux/constant/constant";

const initialState = {
  navigate: null,
};

const navigationReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case NAVIGATE.NAVIGATE_TO:
      return {
        ...state,
        navigate: action.payload,
      };
    default:
      return state;
  }
};

export default navigationReducer;
