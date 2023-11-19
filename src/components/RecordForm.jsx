import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { useEffect, useState } from "react";
import { addRecord, editRecord, getRecordById } from "../services/localStorage";

export default function RecordForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [showAlert, setShowAlert] = useState(false);
  const { inputValues, handleInputChange, resetForm, setForm } = useForm({
    name: "",
    type: "",
    amount: "",
    date: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      const record = getRecordById(id);
      setForm(record);
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    id ? editRecord(id, inputValues) : addRecord(inputValues);
    setShowAlert(true);
    resetForm;
    setTimeout(() => {
      setShowAlert(false);
      navigate("/");
    }, 1000);
  };

  return (
    <section>
      <div className="d-flex my-4 justify-content-between">
        <button
          className="btn btn-outline-secondary"
          onClick={() => navigate("/")}
        >
          Back
        </button>
        <h2>{id ? "Edit" : "Add"} record</h2>
      </div>

      <div className={showAlert ? "px-5 visible" : "px-5 invisible"}>
        <div className="alert alert-success text-white" roll="alert">
          Record {id ? "Edited" : "Added"} successfully
        </div>
      </div>

      <div className="card border-Primary p-5 mx-5 my-1">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label m-2" htmlFor="name">
              Record title
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter the record name"
              value={inputValues.name}
              onChange={handleInputChange}
              name="name"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label m-2" htmlFor="type">
              Record type
            </label>
            <select
              className="form-control"
              id="type"
              value={inputValues.type}
              onChange={handleInputChange}
              name="type"
              required
            >
              <option value="">Enter the record type</option>
              <option value={"Income"}>Income</option>
              <option value={"Expense"}>Expense</option>
            </select>
          </div>

          <div className="form-group">
            <label className="form-label m-2" htmlFor="amount">
              Record amount
            </label>
            <input
              type="number"
              className="form-control"
              id="amount"
              placeholder="Enter the record amount"
              value={inputValues.value}
              onChange={handleInputChange}
              name="amount"
              required
              min={0}
            />
          </div>

          <div className="form-group">
            <label className="form-label m-2" htmlFor="date">
              Record date
            </label>
            <input
              type="date"
              className="form-control"
              id="date"
              placeholder="Enter the record date"
              value={inputValues.date}
              onChange={handleInputChange}
              name="date"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label m-2" htmlFor="category">
              Record category
            </label>
            <input
              type="text"
              className="form-control"
              id="category"
              placeholder="Enter the record category"
              value={inputValues.category}
              onChange={handleInputChange}
              name="category"
            />
          </div>

          <div className="form-group">
            <label className="form-label m-2" htmlFor="description">
              Record description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              placeholder="Enter the record description"
              value={inputValues.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-outline-primary">
              {id ? "Edit" : "Add"} record
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
