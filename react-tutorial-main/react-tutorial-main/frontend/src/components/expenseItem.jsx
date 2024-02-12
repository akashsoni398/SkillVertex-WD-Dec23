import React from "react";
import Card from "react-bootstrap/Card";

function ExpenseItem(props) {

    let list = props.item;
    const listItems = list.map((item) => 
        <Card className="d-inline-block mx-3" style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{item.itemname}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{item.category}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
        </Card>
    );
    return (
      <div>
        {listItems}
      </div>
    );
}
export default ExpenseItem;
