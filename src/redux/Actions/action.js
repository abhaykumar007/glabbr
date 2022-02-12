import { GET_USER_REQUEST } from "../Types/types";

export function getUsers(users) {
  return {
    type: GET_USER_REQUEST,
    payload: users,
  };
}
