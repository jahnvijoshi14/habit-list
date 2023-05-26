export const ADD_HABIT = "ADD_HABIT";
export const CHANGE_STATUS = "CHANGE_STATUS";

export const addHabit = (habit) => {
  return {
    type: ADD_HABIT,
    payload: habit,
  };
};

export const changeStatus = (habits) => {
  return {
    type: CHANGE_STATUS,
    payload: habits,
  };
};
