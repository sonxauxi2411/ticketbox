import { IoMdArrowBack } from "react-icons/io";
import { IoArrowBackSharp } from "react-icons/io5";
import FormGroup from "../../auth/FormGroup";
import { useFormik } from "formik";
import * as Yup from "yup";
import orgApi from "../../../api/modules/org.api";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "../../../redux/loading/loadingSlice";
import Button from "react-bootstrap/Button";

const CreateOrg = ({close}) => {
  const dispath = useDispatch();

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
        close();
        window.location.reload()
        dispath(setGlobalLoading(false));
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div>
        <form
          onSubmit={formCreateOrg.handleSubmit}
          className="d-flex flex-column" style={{ gap: "20px" }}
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
           <div className="d-flex " style={{ gap: "10px" }}>
        <Button
          onClick={formCreateOrg.handleSubmit}
          type="submit"
          className="btn btn-create"
        >
          Add Location
        </Button>
        <Button onClick={close} className="btn btn-secondary">
          Close
        </Button>
      </div>
        </form>

    </div>
  );
};

export default CreateOrg;
