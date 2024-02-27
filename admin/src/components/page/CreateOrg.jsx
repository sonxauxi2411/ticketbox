import { IoMdArrowBack } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import FormGroup from "../auth/FormGroup";
import { useFormik } from "formik";
import * as Yup from "yup";
import orgApi from "../../api/modules/org.api";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "../../redux/loading/loadingSlice";
import { useNavigate } from "react-router-dom";

const CreateOrg = () => {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const handlerBack = () => {
    window.history.back();
  };
  const formCreateOrg = useFormik({
    initialValues: {
      name: "",
      img: "",
      desc: "",
    },
    onSubmit: async (values) => {
      try {
        dispath(setGlobalLoading(true));
        const { name, desc, img } = values;
        await orgApi.createOrg({ name, desc, img });
        dispath(setGlobalLoading(false));
        navigate("/organization");
      } catch (error) {
        console.log(error);
      }
    },
  });
  const { name, img, desc } = formCreateOrg.values;
  return (
    <div className="pt-3">
      <div className="text-end  ">
        <button
          className="btn btn-outline"
          onClick={handlerBack}
          style={{ fontSize: "24px" }}
        >
          <IoMdArrowBack />
        </button>
      </div>
      <div className="row">
        <form
          onSubmit={formCreateOrg.handleSubmit}
          className="col-4 d-flex flex-column"
          style={{ gap: "20px" }}
        >
          <FormGroup
            label="Name"
            type="text"
            placeholder="Name"
            name="name"
            onChange={formCreateOrg.handleChange}
            value={formCreateOrg.values.name}
          />
          <FormGroup
            label="IMG"
            type="url"
            placeholder="IMG "
            name="img"
            onChange={formCreateOrg.handleChange}
            value={formCreateOrg.values.img}
          />
          <FormGroup
            label="Description"
            type="text"
            placeholder="Description "
            name="desc"
            onChange={formCreateOrg.handleChange}
            value={formCreateOrg.values.desc}
          />
          <div className="">
            <button className="btn-custom" type="submit">
              <span>Submit</span>
            </button>
          </div>
        </form>
        <div
          className="col-8 d-flex align-items-center justify-content-center"
          style={{ gap: "10px" }}
        >
          <span>
            <img src={img} alt="" />
          </span>
          <div className="d-flex flex-column">
            <span>{name}</span>
            <span>{desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateOrg;
