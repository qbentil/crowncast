export const actionTypes = {
  SET_USER: "SET_USER",
  SET_EVENTS: "SET_EVENTS",

};

interface Action {
  type: string;
  playload: any;
}

const reducer = (state:any, action:Action) => {
  switch (action.type) {
    case actionTypes.SET_USER:
      return {
        ...state,
        user: action.playload,
      };
    case actionTypes.SET_EVENTS:
      return {
        ...state,
        events: action.playload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
