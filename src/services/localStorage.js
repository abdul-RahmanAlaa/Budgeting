import uuid from "react-uuid";

export const getListOfRecords = () => {
  if (!localStorage["records"]) {
    localStorage["records"] = JSON.stringify([]);
  }

  let records = JSON.parse(localStorage["records"]);
  return records;
};

export const getRecordById = (id) => {
  const records = getListOfRecords();
  const record = records.find((record) => record.id === id);
  return record;
};

export const addRecord = (record) => {
  const records = getListOfRecords();
  records.push({ id: uuid(), ...record });
  localStorage["records"] = JSON.stringify(records);
};

export const editRecord = (id, editedRecord) => {
  let records = getListOfRecords();
  records = records.filter((record) => record.id !== id);
  records.push(editedRecord);
  localStorage["records"] = JSON.stringify(records);
};

export const deleteRecord = (id) => {
  let records = getListOfRecords();
  records = records.filter((record) => record.id !== id);
  localStorage["records"] = JSON.stringify(records);
};
