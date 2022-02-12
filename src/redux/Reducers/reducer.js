import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILED,
} from "../Types/types";
const initial = {
  users: [],
  loading: false,
  error: null,
};
const users = (state = initial, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    default: {
      return state;
    }
  }
};

export default users;
