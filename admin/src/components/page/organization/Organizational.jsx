import { useEffect } from "react";
import orgApi from "../../../api/modules/org.api";
import { useState } from "react";
import { Link } from "react-router-dom";
import Action from "../../action/Action";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";


const Organizational = () => {
  const [listOrg, setListOrg] = useState([]);
  const [checks, setChecks] = useState([]);

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await orgApi.getAllOrg();

        setListOrg(response);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };
    fetchEvent();
  }, []);

  const handlerAllCheck = () => {
    if (checks.length == listOrg.length) {
      setChecks([]);
    } else {
      setChecks(listOrg.map((org) => org._id));
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
<>

    <div className="section-content">
      <div className="title-content d-flex justify-content-between align-items-center">
        <div className="">
          <h3>List organizations </h3>
        </div>
        <Action checks={checks} />
      </div>
      <div className="section-table">
        <table className="w-100">
          <tr className="table-title">
            <th>
              <span className="check-custom" onClick={handlerAllCheck}>
                {checks.length == listOrg.length ? (
                  <MdCheckBox />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </span>
            </th>
            <th>name</th>
            <th>IMG</th>
            <th>description</th>
            <th>create date</th>
            <th>Action</th>
          </tr>
          {listOrg?.map((org) => {
            const currentDate = new Date(org.date_create);
            const formattedDate = currentDate.toLocaleDateString("en-GB");
            return (
              <tr key={org._id} className="table-content">
                <td>
                  <span
                    className="check-custom"
                    onClick={() => handlerchecked(org._id)}
                  >
                    {checks.includes(org._id) ? (
                      <MdCheckBox />
                    ) : (
                      <MdCheckBoxOutlineBlank />
                    )}
                  </span>
                </td>
                <td>
                  <span className="ps-2"> {org.display_name}</span>
                </td>
                <td>
                  <img src={org.img} alt={org.display_name} width="50px" />
                </td>
                <td>{org.description}</td>
                <td>{formattedDate}</td>
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
    </div>
</>
  );
};

export default Organizational;
