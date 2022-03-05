/*

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Container>
      <Link to={`/singleshow/${id}`}>
        <Row>
          <Col key={id} xs={12} md={4} lg={3}>
            <Card>
              <Card.Img src={image} alt={name} className="card_image" />

              <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{rating}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Link>
    </Container>
  );
};
export default ListItem;

import { Link } from "react-router-dom";*/

import { Link } from "react-router-dom";

const ListItem = ({ image, name, rating, id }) => {
  return (
    <Link to={`/singleshow/${id}`} className="listitem">
      <img src={image} alt={name} />
      <div className="listitem__info">
        <h4 className="info__name">{name}</h4>
        <h4 className="info__rating">{rating}</h4>
      </div>
    </Link>
  );
};

export default ListItem;
