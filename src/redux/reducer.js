const initialState = { curView: "practiceChoices" };
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_CUR_VIEW": {
      return {
        ...state,
        curView: action.curView
      };
    }
    default:
      return state;
  }
};

export default reducer;
