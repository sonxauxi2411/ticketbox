import { useFormik } from "formik";
import FormGroup from "../../auth/FormGroup";
import { useEffect, useState } from "react";
import eventApi from "../../../api/modules/event.api";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Button from "react-bootstrap/Button";
import ticketApi from "../../../api/modules/ticket.api";
const CreateTicket = ({ close }) => {
  const [listEvent, setListEvent] = useState([]);
  const [selectEvent, setSelectEvent] = useState(null);
  const animatedComponents = makeAnimated();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await eventApi.allEvent();
        const data = res.map((e) => {
          return {
            value: e._id,
            label: e.display_name,
          };
        });
        setListEvent(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  const fromCreateTicket = useFormik({
    initialValues: {
      name: "",
      price: "",
      desc: "",
      quantity: "",
    },
    onSubmit: async (values) => {
      try {
        const data = {
          name: values.name,
          price: values.price,
          desc: values.desc,
          quantity: values.quantity,
          event_id: selectEvent.value,
        };
       await ticketApi.createTicket(data)
        // const res = await eventApi.createEvent({name:values.name, background: values.img,  })
      } catch (error) {
        console.log("Error creating", error);
      }
    },
  });

  return (
    <div>
      <form className="d-flex flex-column" style={{ gap: "20px" }}>
        <FormGroup
          label="Name"
          type="text"
          placeholder="Name"
          name="name"
          onChange={fromCreateTicket.handleChange}
          value={fromCreateTicket.values.name}
        />
        <FormGroup
          label="Price"
          type="number"
          placeholder="Price"
          name="price"
          onChange={fromCreateTicket.handleChange}
          value={fromCreateTicket.values.price}
        />
        <FormGroup
          label="Quantity"
          type="number"
          placeholder="Quantity"
          name="quantity"
          onChange={fromCreateTicket.handleChange}
          value={fromCreateTicket.values.quantity}
        />
        <FormGroup
          label="Desc"
          type="text"
          placeholder="Desc"
          name="desc"
          onChange={fromCreateTicket.handleChange}
          value={fromCreateTicket.values.desc}
        />
        <div>
          <label>Event</label>
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            className="form-select-custom"
            options={listEvent}
            value={selectEvent}
            onChange={(e) => setSelectEvent(e)}
          />
        </div>
        <div className="d-flex " style={{ gap: "10px" }}>
          <Button
            onClick={fromCreateTicket.handleSubmit}
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

export default CreateTicket;
