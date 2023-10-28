// Page1.js
// import React from 'react';

import React, { useState } from "react";
import "./App.css";
import Example from "./Example";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Table, Button, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";

function Page1() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate("/"); // 뒤로 가기
  };
  const [job, setJob] = useState("");
  const [requirement, setRequirement] = useState("");
  const [level, setlevel] = useState(null); // Example 컴포넌트에서 선택한 난이도 상태

  const handleJobChange = (e) => {
    setJob(e.target.value);
  };

  const handleRequirementChange = (e) => {
    setRequirement(e.target.value);
  };

  const handleLevelChange = (e) => {
    setLevel(e.target.value);
  };

  const handleNext = () => {
    // Create an object with the data
    const dataToSend = {
      job: job,
      requirement: requirement,
      level: level,
    };

    // Send data to the server
    axios
      .post("/api/saveData", dataToSend, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Data has been sent to the server.");
        // Perform page navigation or other tasks after successful data submission
      })
      .catch((error) => {
        console.error("An error occurred during data transmission:", error);
      });
  };

  return (
    <div>
      <h1>Page 1</h1>
      <FormGroup>
        <Label for="jobSelect">Job</Label>
        <Input
          type="select"
          name="job"
          id="jobSelect"
          value={job}
          onChange={handleJobChange}
        >
          <option value="">Please select.</option>
          <option value="Front-end Developer">Front-end Developer</option>
          <option value="Back-end Developer">Back-end Developer</option>
          <option value="AI Researcher">AI Researcher</option>
        </Input>
      </FormGroup>
      <FormGroup>
        <Label for="requirementInput">Requirement</Label>
        <Input
          type="text"
          name="requirement"
          id="requirementInput"
          value={requirement}
          onChange={handleRequirementChange}
        />
      </FormGroup>
      <Example level={level} setlevel={setlevel} />
      <Button onClick={handleGoBack}>이전</Button>
      <Button onClick={handleNext}>다음</Button>
    </div>
  );
}

export default Page1;
