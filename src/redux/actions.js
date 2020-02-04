const updateCurView = curView => {
  console.log(curView);
  return {
    type: "UPDATE_CUR_VIEW",
    curView
  };
};

export { updateCurView };
