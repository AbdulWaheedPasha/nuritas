import React, { useState, useEffect } from 'react'
import {Row,Col} from 'react-bootstrap'
import axios from 'axios'
import Protein from '../components/Protein'


import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function HomeScreen({history}) {

  const [protein, setProtein] = useState([])


  const [keyword, setKeyword] = useState("");
  console.log(keyword)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword)
    axios.get(`/api/protein/${keyword}`).then(function (response){
      setProtein(response.data)
      console.log("response.data",response.data)

    }).catch( function (error){
      setProtein(false)

      console.log(error)
    })
    console.log("protein",protein)
  };

  return (
    <div>
        <h1>Dashboard</h1>

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

        </Col>

        <Col xs="auto" className="my-1">
          <Button type="submit" variant="outline-success" className="p-2">
            Search
          </Button>
        </Col>
      </Row>
    </Form>

        { protein? 
        
        <Protein protein={protein} /> : 
        <p>no product found</p>}

    </div>
  )
}

export default HomeScreen