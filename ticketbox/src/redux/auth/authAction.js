
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import authApi from '../../api/modules/auth.api';

export const login = (values) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const {email, password} = values
    const {user} = await authApi.login({email, password}); 

    dispatch(loginSuccess(user));
  } catch (error) {
    dispatch(loginFailure(error.message));
  }
};

