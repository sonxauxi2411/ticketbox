import { useEffect } from "react";
import orgApi from "../../api/modules/org.api";
import { useState } from "react";
import { Link } from "react-router-dom";
import Action from "../action/Action";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const Organizational = () => {
  const [listOrg, setListOrg] = useState([]);
  const [showCheck, setShowCheck] = useState(false);
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

  const handlerClick = (org) => {
    setShowCheck(true);

    if (checks.includes(org._id)) {
      setChecks(checks.filter((id) => id !== org._id));
      if (checks.length == 0) {
        setShowCheck(false);
      }
    } else {
      setChecks([...checks, org._id]);
    }
  };

  // const handleClickOutside = (event) => {
  //   if (event.target.closest(".table-content") === null) {
  //     setShowCheck(false);
  //   }
  // };
  // useEffect(() => {
  //   document.addEventListener("click", handleClickOutside);

  //   return () => {
  //     document.removeEventListener("click", handleClickOutside);
  //   };
  // }, [showCheck]);

  return (
    <div className="section-content">
      <div className="title-content d-flex justify-content-between align-items-center">
        <div className="">
          <h3>List organizations </h3>
        </div>
        <Action checks={checks} />
        {/*<div className="action">
          <Link to="create" state={{ name: "Organizational / Create Organizational"  }}>
            a
          </Link> 
        </div>*/}
      </div>
      <div className="section-table">
        <table className="w-100">
          <tr className="table-title">
            <th>name</th>
            <th>IMG</th>
            <th>description</th>
            <th>create date</th>
          </tr>
          {listOrg?.map((org) => {
            const currentDate = new Date(org.date_create);
            const formattedDate = currentDate.toLocaleDateString("en-GB");
            return (
              <tr
                onClick={() => handlerClick(org)}
                key={org._id}
                className="table-content"
              >
                <td>
                  <span className="check-custom">
                    {showCheck &&
                      (checks.includes(org._id) ? (
                        <MdCheckBox />
                      ) : (
                        <MdCheckBoxOutlineBlank />
                      ))}
                    {/* {checks.includes(org._id) ? <span><FaSquareCheck /> </span> : "" } */}
                  </span>
                  <span className="ps-2"> {org.display_name}</span>
                </td>
                <td>
                  <img src={org.img} alt={org.display_name} width="50px" />
                </td>
                <td>{org.description}</td>
                <td>{formattedDate}</td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
};

export default Organizational;
