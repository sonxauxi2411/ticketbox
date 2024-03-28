import "./auth.scss";
import LayoutAuth from "./LayoutAuth";
import FormGroup from "./FormGroup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonCustom from "../common/ButtonCustom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import {login} from '../../redux/auth/authAction'
import { reset } from "../../redux/auth/authSlice";

const LoginPage = () => {

  const dispatch = useDispatch()
  const {error} = useSelector(state =>state.auth)
  const navigate = useNavigate()
  const location = useLocation()
  useEffect(() => {
    dispatch(reset());
  }, []);

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    // validationSchema: Yup.object({
    //     email: Yup.string().email('Invalid email').required('Required'),
    // }),
    onSubmit: async (values) => {
      try {
        // console.log(location.state)
        dispatch(login({values, navigate, next: location.state ? location.state.next : '/'}))
      } catch (error) {
        console.log(error)
      }
           
    },
  });
// console.log(useSelector(state =>state.auth))
const handleBlur = (field) => {
  loginForm.setFieldTouched(field, true);
};

  return (
    <LayoutAuth>
      <div className="form-auth">
        <div className="header">
          <span className="cate">Hello</span>
          <h2 className="title">WELCOME BACK</h2>
          <div className="noti-err">
            {error && <span className="text-danger">{error}</span>}
          </div>
        </div>
        <form onSubmit={loginForm.handleSubmit} className="form-login">
          <FormGroup
            label="Email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={loginForm.handleChange}
            value={loginForm.values.email}
            onBlur={() => handleBlur('email')}
          />
          <FormGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={loginForm.handleChange}
            value={loginForm.values.password}
          />
          <div className="forget-pwd">
            <div className="text-end">
              <Link>Forget Password</Link>
            </div>
          </div>
          <div className="text-center">
            <ButtonCustom
              type="submit"
              onClick={loginForm.handleSubmit}
              title="Log in"
            />
          </div>
        </form>
        <div className="text-center footer">
          <span>
            Don&apos;t have an account? <Link to='/register'> Sign up now</Link>{" "}
          </span>
        </div>
      </div>
    </LayoutAuth>
  );
};

export default LoginPage;
