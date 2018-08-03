import Auth from '../services/Auth';

export const ADD_SUCCESS_MSG = 'ADD_SUCCESS_MSG';
export const REMOVE_SUCCESS_MSG = 'REMOVE_SUCCESS_MSG';
export const AUTHENTICATE = 'AUTHENTICATE';
export const UNAUTHENTICATE = 'UNAUTHENTICATE';

export function addSucessMsg(value) {
  return {
    type: ADD_SUCCESS_MSG,
    value,
  };
}

export function removeSucessMsg() {
  return {
    type: REMOVE_SUCCESS_MSG,
  };
}

export const fetchSignUp = async (formData) => {
  const response = await fetch('/auth/signup', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });
  return response;
};

export const fetchSignIn = async (formData) => {
  const response = await fetch('/auth/login', {
    method: 'post',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
    },
    body: formData,
  });
  return response;
};

function authenticate(value) {
  return {
    type: AUTHENTICATE,
    value,
  };
}

function unauthenticate(value) {
  return {
    type: UNAUTHENTICATE,
    value,
  };
}

const getAuthCheckResponse = async () => {
  const response = await fetch('/api/counter', {
    method: 'GET',
    headers: {
      'Content-type': 'application/x-www-form-urlencoded',
      Authorization: `bearer ${Auth.getToken()}`,
    },
  });
  return response;
};

export function authCheck() {
  return function (dispatch) {
    return getAuthCheckResponse()
      .then((res) => {
        if (res.status !== 200) {
          throw new Error();
        }
        return res;
      })
      .then((res) => {
        dispatch(authenticate());
        return res;
      })
      .catch((err) => {
        dispatch(unauthenticate());
        return err;
      });
  };
}
