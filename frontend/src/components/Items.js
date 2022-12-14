import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

function Items({ itemName, items, ekey }) {
  items = items.replace(/'/g, '"'); //replacing all ' with "
  items = JSON.parse(items);
  return (
    <div>
      <Accordion.Item eventKey={ekey}>
        <Accordion.Header>
          {itemName} &nbsp;
          <Badge pill bg="dark">
            {items.length}
          </Badge>
        </Accordion.Header>
        <Accordion.Body>
          <ListGroup variant="flush">
            {items.map((item) => (
              <ListGroup.Item>{item}</ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </div>
  );
}

export default Items;
