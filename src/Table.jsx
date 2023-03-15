import React, { useState } from "react";
import './Table.css'
function TableRows({ rows, onValUpdate }) {
  return rows.map((rowsData, index) => {
    const { SerialNo, Place, Article, Consignor, Consignee, Freight_To_Pay,Collection_Crossing_To_Pay,Recievers_Sign  } = rowsData;
    return (
      <tr key={index}>
        <td>
          <input
            type="text"
            value={SerialNo}
            onChange={(event) => onValUpdate(index, event)}
            name="SerialNo"
            className="InputL2"
          />
        </td>
        <td>
          <input
            type="text"
            value={Place}
            onChange={(event) => onValUpdate(index, event)}
            name="Place"
            className="InputL2"
          />
        </td>
        <td>
          <input
            type="text"
            value={Article}
            onChange={(event) => onValUpdate(index, event)}
            name="Article"
            className="InputL2"
          />
        </td>
        <td>
          <input
            type="text"
            value={Consignor}
            onChange={(event) => onValUpdate(index, event)}
            name="Consignor"
            className="InputL2"
          />
        </td>
        <td>
          <input
            type="text"
            value={Consignee}
            onChange={(event) => onValUpdate(index, event)}
            name="Consignee"
            className="InputL2"
          />
        </td>
        <td>
          <input
            type="text"
            value={Freight_To_Pay}
            onChange={(event) => onValUpdate(index, event)}
            name="Freight_To_Pay"
            className="InputL2"
          />
        </td>
        <td>
          <input
            type="text"
            value={Collection_Crossing_To_Pay}
            onChange={(event) => onValUpdate(index, event)}
            name="Collection_Crossing_To_Pay"
            className="InputL2"
          />
        </td>
        <td>
          <input
            type="text"
            value={Recievers_Sign}
            onChange={(event) => onValUpdate(index, event)}
            name="Recievers_Sign"
            className="InputL2"
          />
        </td>
        
      </tr>
    );
  });
}
function Table() {
  const [rows, initRow] = useState([]);
  const addRowTable = () => {
    const data = {
      SerialNo: "",
      Place: "",
      Article: "",
      Consignor:"",
      Consignee:"",
      Freight_To_Pay: "",
      Collection_Crossing_To_Pay: "",
      Recievers_Sign: "",
    };
    initRow([...rows, data]);
  };
  
  const onValUpdate = (i, event) => {
    const { name, value } = event.target;
    const data = [...rows];
    data[i][name] = value;
    initRow(data);
  };
  return (
    <>
    
      <table className="table table-bordered">
        <thead>
          <tr>
          <th>Serial No</th>
          <th>Place</th>
          <th>Articles</th>
          <th>Consignor</th>
          <th>Consignee</th>
          <th>Freight To Pay</th>
          <th>Collection Crossing To Pay</th>
          <th>Receiver's Signature</th>
          </tr>
        </thead>
        <tbody>
          <TableRows
            rows={rows}
            onValUpdate={onValUpdate}
          />
        </tbody>
      </table>
      <div className="info">
        I &amp; My owner are responsible for the delivery at propper destination. Lorry owner is responsible for any such dues such
        as Hamali, Commission and crossing ect.
         <br/>Received the above goods is sound &amp; in good condition
      </div>
      <hr></hr>
      <button className="button" onClick={addRowTable}>
                Insert Row
              </button>
    </>
  );
}
export default Table;