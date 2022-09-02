import React from "react";
import Items from "../components/Items";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";

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
            {protein.cellular_processes ? (
              <Items
                itemName="Cellular Processes"
                items={protein.cellular_processes}
                ekey="0"
              />
            ) : (
              <p className="text-center"></p>
            )}

            {protein.protein_functions ? (
              <Items
                itemName="Protein Functions"
                items={protein.protein_functions}
                ekey="1"
              />
            ) : (
              <p className="text-center"></p>
            )}

            {protein.reactome_pathways ? (
              <Items
                itemName=" Reactome Pathways"
                items={protein.reactome_pathways}
                ekey="2"
              />
            ) : (
              <p className="text-center"></p>
            )}
          </Accordion>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Protein;
