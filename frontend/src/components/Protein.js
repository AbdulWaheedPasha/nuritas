import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Items from "../components/Items";
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';



function Protein({ protein }) {
  let items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const [cellular, setCellular] = useState([]);

  useEffect(() => {
    var services = protein.cellular_processes;
    console.log("1", services);
    // async function fetchPortein(){
    //   const {data} = await axios.get('/api/protein/26')
    //   setProtein(data)
    //   console.log("data",data)

    // }
    // fetchPortein()
  }, []);

  // let items= JSON.parse(protein.cellular_processes);

  // cellular = cellular.replace(/'/g, '"') //replacing all ' with "
  // cellular = JSON.parse(cellular)
  // console.log(cellular)

  // var services = "['service1', 'service2', 'service3']"
  // var services = "['cell adhesion', 'cell-substrate junction assembly', 'cortical actin cytoskeleton organization', 'cytoskeletal anchoring at plasma membrane', 'integrin activation', 'integrin-mediated signaling pathway']"
  // var services = '"' + protein.cellular_processes + '"'
  var services = "['service1', 'service2', 'service3']";
  services = services.replace(/'/g, '"'); //replacing all ' with "
  services = JSON.parse(services);
  console.log(services);

  return (
    // <Accordion defaultActiveKey="0" flush>
    <div>


    <Card className="my-3 p-3 rounded">
      <Card.Header as="h5">Protein Id : {protein.protein_id}</Card.Header>
      <Card.Body>
        <Card.Text>
            <strong>Accession :</strong>
            &nbsp;{protein.accession}
        </Card.Text>

        <Card.Text>
            <strong>Avg Mass :</strong>
            &nbsp;{protein.avg_mass}
        </Card.Text>

        <Card.Text>
            <strong>Description :</strong>
            &nbsp;{protein.description}
        </Card.Text>


        <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Cellular Processes &nbsp;<Badge pill bg="dark">9</Badge></Accordion.Header>
        <Accordion.Body>
          {protein.cellular_processes}
          <Items items={services} />
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Protein Functions #2</Accordion.Header>
        <Accordion.Body>{protein.protein_functions}</Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Reactome Pathways #3</Accordion.Header>
        <Accordion.Body>{protein.reactome_pathways}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
      </Card.Body>
    </Card>


    </div>
  );
}

export default Protein;
