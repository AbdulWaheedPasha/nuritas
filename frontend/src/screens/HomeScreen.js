import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import Protein from "../components/Protein";
import LineChart from "../components/LineChart";
import { Button, Form } from "react-bootstrap";

function HomeScreen() {
  const [protein, setProtein] = useState({});
  const [timepoint, setTimepoint] = useState([]);
  const [keyword, setKeyword] = useState("");

  // on submit search fetch protein by ID
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .get(`/api/protein/${keyword}`)
      .then(function (response) {
        setProtein(response.data);
      })
      .catch(function (error) {
        setProtein(false);
        console.log(error);
      });
  };

  // Fetch protein timepoint
  useEffect(() => {
    axios
      .get("/api/protein/26?numeric_timepoint=1")
      .then(function (response) {
        const propertyNames = Object.values(response.data);
        setTimepoint(propertyNames);
      })
      .catch(function (error) {
        setTimepoint(false);
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Search Protein</h1>

      <Form onSubmit={submitHandler}>
        <Row className="align-items-center">
          <Col sm={10} className="">
            <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
              Protein
            </Form.Label>
            <Form.Control
              type="number"
              onChange={(e) => setKeyword(e.target.value)}
              className="mr-sm-2 ml-sm-5"
              id="inlineFormInputName"
              placeholder="Protein Id"
              required
            ></Form.Control>
          </Col>

          <Col xs="auto" className="my-1">
            <Button type="submit" variant="outline-success" className="p-2">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      {protein ? (
        <Protein protein={protein} />
      ) : (
        <h1 className="text-center">no protein found</h1>
      )}

      <LineChart />
    </div>
  );
}

export default HomeScreen;
