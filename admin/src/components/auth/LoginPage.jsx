import { useFormik } from "formik";
import FormGroup from "./FormGroup";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import authApi from "../../api/modules/auth.api";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoading } from "../../redux/loading/loadingSlice";

const validatonSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const LoginPage = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispath = useDispatch();

  const loginForm = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      try {
        dispath(setGlobalLoading(true));
        await validatonSchema.validate(values, { abortEarly: false });
        const response = await authApi.login({
          email: values.email,
          password: values.password,
        });
        if (response.message) {
          setError(response.message);
        } else {
          window.location.reload();
        }
        dispath(setGlobalLoading(false));
      } catch (errors) {
        loginForm.setErrors(
          errors.inner.reduce(
            (acc, error) => ({ ...acc, [error.path]: error.message }),
            {}
          )
        );

      }
    },
  });
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (user) {
      return navigate("/");
    }
  }, []);
  return (
    <div className="container">
      <div className="wrapper-login">
        <div className="d-flex flex-column" style={{ width: "420px" }}>
          <div className="d-flex flex-column pb-3" style={{ gap: "" }}>
            <h2 className="">Login Admin</h2>
            <span>Enter your email and password to sign in!</span>
          </div>
          <div className="text-center text-danger" style={{ height: "28px" }}>
            <span>{error}</span>
          </div>
          <form
            onSubmit={loginForm.handleSubmit}
            className="d-flex flex-column"
            style={{ gap: "20px" }}
          >
            <FormGroup
              name="email"
              label="Email"
              placeholder="mail@funix.edu.vn"
              type="email"
              onChange={loginForm.handleChange}
              value={loginForm.values.email}
              form={loginForm}
            />
            <FormGroup
              name="password"
              label="Password"
              placeholder="Min 8 characters"
              type="password"
              onChange={loginForm.handleChange}
              value={loginForm.values.password}
              form={loginForm}
            />
            <button className="btn-custom" type="submit">
              <span>Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
