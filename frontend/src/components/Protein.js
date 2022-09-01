import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";
import Items from "../components/Items";
import Badge from "react-bootstrap/Badge";
import Card from "react-bootstrap/Card";

function Protein({ protein }) {
  return (
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
              <Accordion.Header>
                Cellular Processes &nbsp;
                <Badge pill bg="dark">
                  7
                </Badge>
              </Accordion.Header>
              <Accordion.Body>
                {protein.cellular_processes}

                {/* list the array  */}
                {/* <Items items={cellular} /> */}
              </Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="1">
              <Accordion.Header>
                Protein Functions &nbsp;
                <Badge pill bg="dark">
                  9
                </Badge>
              </Accordion.Header>
              <Accordion.Body>{protein.protein_functions}</Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="2">
              <Accordion.Header>
                Reactome Pathways &nbsp;
                <Badge pill bg="dark">
                  12
                </Badge>
              </Accordion.Header>
              <Accordion.Body>{protein.reactome_pathways}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Protein;
