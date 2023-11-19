import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { deleteRecord, getListOfRecords } from "../services/localStorage";

function RecordData({ record, setRecords }) {
  const { id, name, type, amount, date, category, description } = record;

  const navigate = useNavigate();

  const [showDescription, setShowDescription] = useState(false);
  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const removeRecord = () => {
    deleteRecord(id);
    setRecords(getListOfRecords());
  };

  return (
    <>
      <tr>
        <th className={type === "Expense" ? "text-danger" : "text-primary"}>{date}</th>
        <th className={type === "Expense" ? "text-danger" : "text-primary"}>{name}</th>
        <th className={type === "Expense" ? "text-danger" : "text-primary"}>
          {type}
        </th>
        <th className={type === "Expense" ? "text-danger" : "text-primary"}>{amount}</th>
        <th className={type === "Expense" ? "text-danger" : "text-primary"}>{category ? category : "not Categorized"}</th>
        <th>
          <div className="d-flex justify-content-evenly ">
            <span
              role="button"
              className="badge bg-success"
              onClick={toggleDescription}
            >
              {"More Data"}
            </span>
            <span
              role="button"
              className="badge bg-warning"
              onClick={() => navigate(`/edit-record/${id}`)}
            >
              {"Edit"}
            </span>
            <span
              role="button"
              className="badge bg-danger"
              onClick={() => removeRecord()}
            >
              {"Delete"}
            </span>
          </div>
        </th>
      </tr>
      {showDescription && (
        <tr className="flex-fill p-5">
          <th colspan="7" className="px-2" roll="alert">
            {description}
          </th>
        </tr>
      )}
    </>
  );
}

export default RecordData;
