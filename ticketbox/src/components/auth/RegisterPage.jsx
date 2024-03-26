import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LayoutAuth from "./LayoutAuth";
import { Link } from "react-router-dom";
import ButtonCustom from "../common/ButtonCustom";
import FormGroup from "./FormGroup";
import { useFormik } from "formik";
import * as Yup from "yup";
import { register } from "../../redux/auth/authAction";
import { reset } from "../../redux/auth/authSlice";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.auth);
  
  useEffect(() => {
    dispatch(reset());
  }, []);

  const registerForm = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string().email("Invalid email").required("Required"),
      username: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      dispatch(register(values));
    },

    validateOnChange: true,
    validateOnBlur: true,
  });

  return (
    <LayoutAuth>
      <div className="form-auth">
        <div className="header">
          <span className="cate">Hello</span>
          <h2 className="title">TO BOLETO</h2>
          <div className="noti-err">
            {error && <span className="text-danger">{error}</span>}
          </div>
        </div>
        <form onSubmit={registerForm.handleSubmit} className="form-login">
          <FormGroup
            label="Email"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            value={registerForm.values.email}
            onFocus={registerForm.handleFocus}
            errorMessage={
              registerForm.errors.email &&
              registerForm.touched.email &&
              registerForm.errors.email
            }
          />
          <FormGroup
            label="username"
            type="text"
            name="username"
            placeholder="Enter Your username"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            value={registerForm.values.username}
            onFocus={registerForm.handleFocus}
            errorMessage={
              registerForm.errors.username &&
              registerForm.touched.username &&
              registerForm.errors.username
            }
          />
          <FormGroup
            label="Password"
            type="password"
            name="password"
            placeholder="Password"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            onFocus={registerForm.handleFocus}
            value={registerForm.values.password}
            errorMessage={
              registerForm.errors.password &&
              registerForm.touched.password &&
              registerForm.errors.password
            }
          />
          <FormGroup
            label="Confirm Password"
            type="password"
            name="confirmPassword"
            placeholder="Password"
            onChange={registerForm.handleChange}
            onBlur={registerForm.handleBlur}
            onFocus={registerForm.handleFocus}
            value={registerForm.values.confirmPassword}
            errorMessage={
              registerForm.errors.confirmPassword &&
              registerForm.touched.confirmPassword &&
              registerForm.errors.confirmPassword
            }
          />
          <div className="forget-pwd">
            <div className="text-end">
              <Link>Forget Password</Link>
            </div>
          </div>
          <div className="text-center">
            <ButtonCustom
              type="submit"
              onClick={registerForm.handleSubmit}
              title="Sign UP"
            />
          </div>
        </form>
        <div className="text-center footer">
          <span>
            Already have an account? <Link to="/login"> Login</Link>{" "}
          </span>
        </div>
      </div>
    </LayoutAuth>
  );
};

export default RegisterPage;
