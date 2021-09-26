import React from "react";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Button, Card } from "react-bootstrap";

const Cards = (props) => {
  return (
    <>
      <Card className="portfolio_card">
        <Card.Img className="card_img" variant="top" src={props.image} />
        <a href="#">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#">
          <FontAwesomeIcon icon={faLink} />
        </a>

        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
