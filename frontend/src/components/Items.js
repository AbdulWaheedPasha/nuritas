import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

function Items({ items }) {
  console.log("items",items)
  return (
    <div>
      <ListGroup variant="flush">

        {items.map((item) => (
          <ListGroup.Item>{item}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Items;
