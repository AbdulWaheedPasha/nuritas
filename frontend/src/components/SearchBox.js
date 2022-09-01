import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'

import Col from "react-bootstrap/Col";
// import Form from 'react-bootstrap/Form';
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";

function SearchBox() {
  const [keyword, setKeyword] = useState("");
  console.log(keyword)
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword)
    // if (keyword) {
    //   history.push(`/?keyword=${keyword}&page=1`);
    // } else {
    //   history.push(history.push(history.location.pathname));
    // }
  };
  return (
    <Form onSubmit={submitHandler}>
      <Row className="align-items-center">
        <Col sm={8} className="">
          <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
            Name
          </Form.Label>
          <Form.Control
            type="text"
            name="q"
            onChange={(e) => setKeyword(e.target.value)}
            className="mr-sm-2 ml-sm-5"
            id="inlineFormInputName"
            placeholder="Protein Id"
          ></Form.Control>

          {/* <Form.Control className='mr-sm-2 ml-sm-5' id="inlineFormInputName" placeholder="Protein Id" /> */}
        </Col>

        <Col xs="auto" className="my-1">
          <Button type="submit" variant="outline-success" className="p-2">
            Search
          </Button>
        </Col>
      </Row>
    </Form>
    //     <Form onSubmit={submitHandler} inline>
    //     <Form.Control
    //         type='text'
    //         name='q'
    //         onChange={(e) => setKeyword(e.target.value)}
    //         className='mr-sm-2 ml-sm-5'
    //     ></Form.Control>

    // <Button
    //         type='submit'
    //         variant='outline-success'
    //         className='p-2'
    //     >Submit</Button>
    // </Form>
  );
}

export default SearchBox;
