import { useFormik } from "formik";
import FormGroup from "../../auth/FormGroup";
import Button from "react-bootstrap/Button";
import locationApi from "../../../api/modules/location.api";
const CreateLocation = ({ close }) => {
  const formCreateLocation = useFormik({
    initialValues: {
      name: "",
      city: "",
      adress: "",
    },
    onSubmit: async (values) => {
      try {
        const { name, city, adress } = values;
        await locationApi.create({ name, city, adress });
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form
      className="d-flex flex-column"
      style={{ gap: "20px" }}
    >
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
