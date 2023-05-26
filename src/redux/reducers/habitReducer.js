import { ADD_HABIT, CHANGE_STATUS } from "../actions/action";
const initialState = [];
export const habitReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_HABIT:
      console.log("ADD_HABIT");
      return [action.payload, ...state];

    case CHANGE_STATUS:
      console.log("CHANGE_STATUS");

      state[action.payload.stateIndex] = changeStatues(action.payload);

      return state;
  }

  console.log("LAST CHANGE");
  return state;
};

const changeStatues = (state) => {
  state.habit.dates.map((data, index) => {
    if (index == state.index) {
      data.status = state.status;

      return data;
    }
    return data;
  });

  return state.habit;
};
