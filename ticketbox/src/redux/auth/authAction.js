import { loginStart, loginSuccess, loginFailure ,registerStart ,registerFailure, registerSucess} from "./authSlice";
import authApi from "../../api/modules/auth.api";

export const login = ({values, navigate}) => async (dispatch) => {
  try {
    dispatch(loginStart());
    const { email, password } = values;
    const { user, message } = await authApi.login({ email, password });
    
    if ( message) dispatch(loginFailure(message));
      
    if ( user){
      dispatch(loginSuccess(user))
      navigate('/')
    }
    
    
  } catch (error) {
    console.log(error);
    dispatch(loginFailure(error.message));
  }
};


export const register = (values) => async (dispatch) => {
  try {
    dispatch(registerStart())
   
    const {email, username, password} = values;
    const {user, message} = await authApi.register({email, username, password});
    console.log(message);
    if(user) dispatch(registerSucess());
    if(message) dispatch(registerFailure(message));
  } catch (error) {
    dispatch(registerFailure(error.message));
  }
}