export const SetcurrentUser = (user) => ({
  type: "SET_CURRENT_USER",
  payload: user,
  // at first user is null
});
// with dispatch this will be an action obj 