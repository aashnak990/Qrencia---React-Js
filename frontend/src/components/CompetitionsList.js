import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useState } from "react";

import classes from './CompetitionsList.module.css';

function CompetitionsList({ competitions }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const [buttonsClicked, setButtonsClicked] = useState(new Array(competitions).fill(false));
  const [isClicked, setIsClicked] = useState(false);

  const handleShow = (val, i) => {
    setIsClicked(true);
    setShow(true);
    let result = [...buttonsClicked];
    result[val.id - 1] = true;
    setButtonsClicked(result);
  };

  return (
    <>
      <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-4">
        {competitions.map((competitions, i) => (
          <Col key={competitions.id}>
            <Card className={classes.competitionsCard}>
              <Card.Img variant="top" src={competitions.image} className={classes.competitionsImage} />
              <Card.Body>
                <Card.Subtitle className={classes.competitionsSubTitle}>
                  {competitions.mode}
                </Card.Subtitle>
                <Card.Title className={classes.competitionsTitle}>{competitions.title}</Card.Title>
                <Card.Text className={classes.competitionsDescription}>
                  {competitions.description}
                </Card.Text>
                <Button className={classes.competitionsButton} value={competitions.id} onClick={(e) => handleShow(competitions, i)}>{buttonsClicked[competitions.id - 1] ? 'Joined' : 'Enrol Now'}</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {
        isClicked && <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Enrolled Successfully!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Congratulations, you have successfully enrolled in the competition.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Ok
            </Button>
          </Modal.Footer>
        </Modal>
      }
    </>
  );
}

export default CompetitionsList;
