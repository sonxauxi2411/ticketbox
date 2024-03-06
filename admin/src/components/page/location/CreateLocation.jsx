import { useFormik } from "formik";
import FormGroup from "../../auth/FormGroup";
import Button from "react-bootstrap/Button";
import locationApi from "../../../api/modules/location.api";
import { useDispatch } from "react-redux";
import { setGlobalLoading } from "../../../redux/loading/loadingSlice";
const CreateLocation = ({ close }) => {
  const dispath = useDispatch();
  const formCreateLocation = useFormik({
    initialValues: {
      name: "",
      city: "",
      adress: "",
    },
    onSubmit: async (values) => {
      try {
        dispath(setGlobalLoading(true));
        const { name, city, adress } = values;
        await locationApi.create({ name, city, adress });
        close();
        window.location.reload()
        dispath(setGlobalLoading(false));
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form className="d-flex flex-column" style={{ gap: "20px" }}>
      <FormGroup
        value={formCreateLocation.values.name}
        onChange={formCreateLocation.handleChange}
        type="text"
        name="name"
        label="Name"
        placeholder="Name"
      />
      <FormGroup
        onChange={formCreateLocation.handleChange}
        value={formCreateLocation.values.city}
        type="text"
        name="city"
        label="City"
        placeholder="City"
      />
      <FormGroup
        type="text"
        name="adress"
        label="Adress"
        placeholder="Adress"
        value={formCreateLocation.values.adress}
        onChange={formCreateLocation.handleChange}
      />
      <div className="d-flex " style={{ gap: "10px" }}>
        <Button
          onClick={formCreateLocation.handleSubmit}
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
  );
};

export default CreateLocation;
