import React, { useState, useEffect } from "react";
import { Table, Button } from "reactstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";

function Page2() {
  const navigate = useNavigate();
  const location = useLocation();
  const receivedData = location.state?.data;
  const [data, setData] = useState([]);
  const [toggledIndices, setToggledIndices] = useState([]);
  console.log(receivedData);

  const handleGoBack = () => {
    navigate(-1, { state: { data: receivedData } });
  };

  useEffect(() => {
    axios
      .get("/data.json")
      .then((response) => {
        setData(response.data);
        setToggledIndices(new Array(response.data.length).fill(false));
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleVisibility = (index) => {
    setToggledIndices((prevToggledIndices) => {
      const newToggledIndices = [...prevToggledIndices];
      newToggledIndices[index] = !newToggledIndices[index];
      return newToggledIndices;
    });
  };

  return (
    <div>
      <h1>Page 2</h1>
      <Table>
        <thead>
          <tr>
            <th>Anticipated Questions</th>
            <th>Answer</th>
            <th>Show / Hide</th>
          </tr>
        </thead>
        <tbody>
          {data.map((element, index) => (
            <tr key={index}>
              <td>{element.question}</td>
              <td>
                {toggledIndices[index] ? (
                  <span>{element.answer}</span>
                ) : (
                  <span>HIDDEN</span>
                )}
              </td>
              <td>
                <Button onClick={() => toggleVisibility(index)}>
                  {toggledIndices[index] ? "Hide" : "Show"}
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button onClick={handleGoBack}>뒤로 가기</Button>
      <Link to="/">
        <Button>Done!</Button>
      </Link>
    </div>
  );
}

export default Page2;
