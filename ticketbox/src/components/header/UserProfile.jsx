import { useFormik } from "formik";
import Header from "./Header";
import FormGroup from "../auth/FormGroup";
import { useSelector } from "react-redux";
import ButtonCustom from "../common/ButtonCustom";
import authApi from "../../api/modules/auth.api";

const UserProfile = () => {
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  const form = useFormik({
    initialValues: {
      username: user.username,
      email: user.email,
      phone: user.phone  ? user.phone : "",
      fullname: user.fullname  ? user.fullname : "",
      adress: user.adress  ? user.adress : "",
    },
    onSubmit: async (values) => {
      try {
        // console.log(user);
        const res = await authApi.updateProfile({
          ...values,
          user_id: user._id,
        });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <>
      <Header title='Profile' />

      <div className="wrapper-profile">
        <div className="container">
          <div className="" style={{ paddingTop: "120px" }}>
            <div className="d-flex justify-content-center ">
              <from onSubmit={form.handleSubmit} style={{ width: "500px" }}>
                <FormGroup
                  name="username"
                  label="Username"
                  type="text"
                  placeholder="Username"
                  onChange={form.handleChange}
                  value={form.values.username}
                  readonly
                  
                />
                <FormGroup
                  name="email"
                  label="Email"
                  type="email"
                  placeholder="email"
                  onChange={form.handleChange}
                  value={form.values.email}
                  readonly
                />
                <FormGroup
                  name="fullname"
                  label="Fullname"
                  type="text"
                  placeholder="fullname"
                  onChange={form.handleChange}
                  value={form.values.fullname}
                />
                <FormGroup
                  name="phone"
                  label="Phone"
                  type="number"
                  placeholder="Phone"
                  onChange={form.handleChange}
                  value={form.values.phone}
                />
                <FormGroup
                  name="adress"
                  label="Adress"
                  type="text"
                  placeholder="adress"
                  onChange={form.handleChange}
                  value={form.values.adress}
                />
                <div className="text-center">
                  <ButtonCustom title="submit" onClick={form.handleSubmit} />
                </div>
              </from>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
