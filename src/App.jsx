import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import RecordForm from "./components/RecordForm";
import RecordList from "./components/RecordList";

export default function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<RecordList />} />
          <Route path="/create-record" element={<RecordForm />} />
          <Route path="/edit-record/:id" element={<RecordForm />} />
        </Routes>
      </div>
    </>
  );
}
