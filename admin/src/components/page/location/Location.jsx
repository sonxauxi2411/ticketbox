import { useEffect, useState } from "react";
import locationApi from "../../../api/modules/location.api";
import Action from "../../action/Action";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import ModalForm from "../../layout/ModalForm";
import CreateLocation from "./CreateLocation";

const Location = () => {
  const [listLocation, setListLocation] = useState([]);
  const [checks, setChecks] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fetch = async () => {
      try {
        const response = await locationApi.getAll();

        setListLocation(response);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetch();
  }, []);

  const handlerAllCheck = () => {
    if (checks.length == listLocation.length) {
      setChecks([]);
    } else {
      setChecks(listLocation.map((e) => e._id));
    }
  };

  const handlerchecked = (org_id) => {
    if (checks.includes(org_id)) {
      setChecks(checks.filter((id) => id !== org_id));
    } else {
      setChecks([...checks, org_id]);
    }
  };

  return (
    <div className="section-content">
      <div className="title-content d-flex justify-content-between align-items-center">
        <div className="">
          <h3>List Location </h3>
        </div>
        <Action open={() => setShow(true)} checks={checks} />
      </div>

      <div className="section-table">
        <table className="w-100">
          <tr className="table-title">
            <th>
              <span className="check-custom" onClick={handlerAllCheck}>
                {checks.length == listLocation.length ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </span>
            </th>
            <th>name</th>
            <th>city</th>
            <th>adress</th>
            <th>Action</th>
          </tr>
          {listLocation?.map((location) => {
            return (
              <tr key={location._id} className="table-content">
                <td>
                  <span
                    className="check-custom"
                    onClick={() => handlerchecked(location._id)}
                  >
                    {checks.includes(location._id) ? (
                      <MdCheckBox />
                    ) : (
                      <MdCheckBoxOutlineBlank />
                    )}
                  </span>
                </td>
                <td>{location.display_name}</td>
                <td>{location.city}</td>
                <td>{location.adress}</td>
                <td>
                  <div className="d-flex" style={{ gap: "10px" }}>
                    <button className="btn btn-danger">Delete</button>
                    <button className="btn btn-primary">Edit</button>
                  </div>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
      <Modal
        className=""
        centered
        show={show}
        onHide={() => setShow(false)}
      >
        <ModalForm  title="Location" close={()=>setShow(false)}>
          <CreateLocation close={() => setShow(false)} />
        </ModalForm>
      </Modal>
    </div>
  );
};

export default Location;
