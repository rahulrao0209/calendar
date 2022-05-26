export const eventReducer = (state, action) => {
  switch (action.type) {
    case "update-title":
      return {
        title: action.data,
        desc: state.desc,
        date: state.date,
        color: state.color
      };
    case "update-desc":
      return {
        title: state.title,
        desc: action.data,
        date: state.date,
        color: state.color
      };
    case "update-date":
      return {
        title: state.title,
        desc: state.desc,
        date: action.data,
        color: state.color
      };
    case "update-color":
      return {
        title: state.title,
        desc: state.desc,
        date: state.date,
        color: action.data
      };
    default:
      return state;
  }
};
