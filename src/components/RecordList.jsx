import { useEffect, useState } from "react";
import RecordData from "./RecordData";
import { getListOfRecords } from "../services/localStorage";

export default function RecordList() {
  const headers = ["Date", "Name", "Type", "Amount", "Category", "More "];
  const [records, setRecords] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpense, setTotalExpense] = useState(0);

  useEffect(() => {
    const allRecords = getListOfRecords();
    setRecords(allRecords);
    getIncome(allRecords);
    getExpense(allRecords);
  }, []);

  const getIncome = (parm) => {
    const incomeRecords = parm.filter((record) => record.Type === "Income");
    const totalIncomeAmount = incomeRecords.reduce(
      (total, record) => total + record.Amount,
      0
    );
    setTotalIncome(totalIncomeAmount);
  };

  const getExpense = (parm) => {
    const expenseRecords = parm.filter(
      (record) => record.Type === "Expense"
    );
    const totalExpenseAmount = expenseRecords.reduce(
      (total, record) => total + record.Amount,
      0
    );
    setTotalExpense(totalExpenseAmount);
  };

  return (
    <section>
      <h1 className="my-5 text-center">{"Track your budget"}</h1>

      {!records.length > 0 ? (
        <h3 className="text-center">There is no records</h3>
      ) : (
        <div>
          <div className="card p-2 my-3 d-flex flex-row justify-content-evenly ">
            <div>
              {"Total income:"} {totalIncome}
            </div>
            <div>
              {"Total expense:"} {totalExpense}
            </div>
            <div>
              {"Total:"} {totalIncome - totalExpense}
            </div>
          </div>
          <div className="card p-3">
            <table className="table table-hover text-center table-striped">
              <thead>
                <tr>
                  {headers.map((head, i) => (
                    <th key={i}>{head}</th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {records.map((record) => (
                  <RecordData
                    record={record}
                    key={record.id}
                    setRecords={setRecords}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
}
