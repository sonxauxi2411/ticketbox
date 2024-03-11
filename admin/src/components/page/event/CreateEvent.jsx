import { useFormik } from "formik";
import FormGroup from "../../auth/FormGroup";
import Button from "react-bootstrap/Button";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useEffect, useState } from "react";
import orgApi from "../../../api/modules/org.api";
import locationApi from "../../../api/modules/location.api";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import eventApi from "../../../api/modules/event.api";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalLoading } from "../../../redux/loading/loadingSlice";
import { resetDataEdit } from "../../../redux/editData/editSlice";

const optionCategory = [
  { value: "Event", label: "Event" },
  { value: "Sport", label: "Sport" },
  { value: "Workshop", label: "Workshop" },
  { value: "Live Music", label: "Live Music" },
  { value: "Stage", label: "Stage" },
];

const CreateEvent = ({ close }) => {
  const animatedComponents = makeAnimated();
  const eventDataEdit = useSelector((state) => state.edit.data);
  const [listOrg, setListOrg] = useState([]);
  const [listLocation, setLocation] = useState([]);
  const [selectedDate, setSelectedDate] = useState({
    start: eventDataEdit?.start_date_time
      ? new Date(eventDataEdit.start_date_time)
      : new Date(),
    end: eventDataEdit?.end_date_time
      ? new Date(eventDataEdit.end_date_time)
      : new Date(),
  });

  const categoryEventEdit = optionCategory.filter((cate) =>
    eventDataEdit?.category.includes(cate.value)
  );
  const orgEventEdit = {
    value: eventDataEdit?.org._id,
    label: eventDataEdit?.org.display_name,
  };
  const locationEdit = {
    value: eventDataEdit?.location._id,
    label: eventDataEdit?.location.display_name,
  };
  const [selectedOptions, setSelectedOptions] = useState({
    category: categoryEventEdit ? categoryEventEdit.map(o => o.value) : null,
    org: orgEventEdit ? orgEventEdit.value : null,
    location: locationEdit ? locationEdit.value : null,
  });
  const [desc, setDesc] = useState(eventDataEdit?.description ? eventDataEdit.description : "" );

  // console.log(eventDataEdit)
  const dispatch = useDispatch();
  const handleDateChange = (date, dateType) => {
    setSelectedDate((prevState) => ({
      ...prevState,
      [dateType]: date,
    }));
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [orgRes, locationRes] = await Promise.all([
          orgApi.getAllOrg(),
          locationApi.getAll(),
        ]);
        const orgData = orgRes.map((o) => ({
          value: o._id,
          label: o.display_name,
        }));
        const locationData = locationRes.map((l) => ({
          value: l._id,
          label: l.display_name,
        }));

        setListOrg(orgData);
        setLocation(locationData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (selectedOption, optionKey) => {
    setSelectedOptions((prevState) => ({
      ...prevState,
      [optionKey]: Array.isArray(selectedOption)
        ? selectedOption.map((o) => o.value)
        : selectedOption
        ? selectedOption.value
        : null,
    }));
  };
  const formCreateEvent = useFormik({
    initialValues: {
      name: eventDataEdit ? eventDataEdit.display_name : "",
      img: eventDataEdit ? eventDataEdit.background : "",
    },
    onSubmit: async (values) => {
      try {
        // dispatch(setGlobalLoading(true));
        const data = {
          name: values.name,
          background: values.img,
          org_id: selectedOptions.org,
          start_date: selectedDate.start,
          end_date: selectedDate.end,
          category: selectedOptions.category,
          location_id: selectedOptions.location,
          description: desc,
        };
        if (eventDataEdit) {

          await eventApi.updateEvent({ event_id: eventDataEdit._id, data });
        } else {
    
          await eventApi.createEvent(data);
        }
        dispatch(setGlobalLoading(false));
        window.location.reload();
      } catch (error) {
        console.log("Error creating", error);
      }
    },
  });
  const handlerClose = () => {
    close();
    dispatch(resetDataEdit());
  };

  return (
    <div>
      <form
        onSubmit={formCreateEvent.handleSubmit}
        className="d-flex flex-column"
        style={{ gap: "20px" }}
      >
        <div className="row">
          <div className="col d-flex flex-column" style={{ gap: "20px" }}>
            <FormGroup
              label="Name"
              type="text"
              placeholder="Name"
              name="name"
              onChange={formCreateEvent.handleChange}
              value={formCreateEvent.values.name}
            />
            <FormGroup
              label="IMG"
              type="url"
              placeholder="IMG "
              name="img"
              onChange={formCreateEvent.handleChange}
              value={formCreateEvent.values.img}
            />
            <div>
              <label>Category</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                isMulti
                className="form-select-custom"
                options={optionCategory}
                value={setSelectedOptions.category}
                onChange={(selectedOption) =>
                  handleChange(selectedOption, "category")
                }
                defaultValue={categoryEventEdit ? categoryEventEdit : null}
              />
            </div>

            <div>
              <label>ORG</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                className="form-select-custom"
                options={listOrg}
                value={setSelectedOptions.org}
                onChange={(selectedOption) =>
                  handleChange(selectedOption, "org")
                }
                defaultValue={orgEventEdit ? orgEventEdit : ""}
              />
            </div>
            <div>
              <label>Location</label>
              <Select
                closeMenuOnSelect={false}
                components={animatedComponents}
                className="form-select-custom"
                options={listLocation}
                value={setSelectedOptions.location}
                onChange={(selectedOption) =>
                  handleChange(selectedOption, "location")
                }
                defaultValue={locationEdit ? locationEdit : ""}
              />
            </div>
            <div className="d-flex" style={{ gap: "10px" }}>
              <label>Start Date </label>
              <DatePicker
                selected={selectedDate.start}
                onChange={(date) => handleDateChange(date, "start")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="dd/MM/yyyy h:mm aa"
              />
              <label>End Date </label>
              <DatePicker
                selected={selectedDate.end}
                onChange={(date) => handleDateChange(date, "end")}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={15}
                dateFormat="dd/MM/yyyy h:mm aa"
              />
            </div>
          </div>
          <div className="col">
            <label>Desc</label>

            <CKEditor
              editor={ClassicEditor}
              data={eventDataEdit?.description ? eventDataEdit.description : "" }
              onChange={(event, editor) => {
                const data = editor.getData();
                setDesc(data);
              }}
            />
          </div>
        </div>
        <div className="d-flex " style={{ gap: "10px" }}>
          <Button
            onClick={formCreateEvent.handleSubmit}
            type="submit"
            className="btn btn-create"
          >
            <span>{eventDataEdit ? "Edit" : " Add Location"}</span>
          </Button>
          <Button onClick={handlerClose} className="btn btn-secondary">
            Close
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateEvent;
