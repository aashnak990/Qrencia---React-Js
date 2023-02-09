import { Row, Col, Card, Button, Modal } from "react-bootstrap";
import { useState, useEffect, useMemo } from 'react';
import classes from './CompetitionsList.module.css';

function CompetitionsList({ competitions }) {
  
  const [show, setShow] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [competitonsList, setCompetitonsList] = useState([]);
  const [selectedMode, setSelectedMode] = useState();

  var filteredList = useMemo(getFilteredList, [selectedMode, competitonsList]);

  const handleClose = () => setShow(false);
  const handleShow = (val, i) => {
    setIsClicked(true);
    setShow(true);
    competitonsList.map(function(o) {
      if (o.id === val.id)
        o.isEnrolled = true;
      return competitonsList;
    });
  };
 

  // Add default value on page load
  useEffect(() => {
    setCompetitonsList(competitions);
  }, [competitions]);
  

 
  function handleModeChange(event) {
    setSelectedMode(event.target.value);
  }

  // Function to get filtered list
  function getFilteredList() {
    // Avoid filter when selectedMode is null
    if (!selectedMode) {
      return competitonsList;
    }
    return competitonsList.filter((item) => item.mode === selectedMode);
  }

  return (
    <>
    <div className={classes.filterContainer}>
        <div>
          <select className={classes.selectBox}
            name="category-list"
            id="category-list"
            onChange={handleModeChange}>
            <option value="">Filter By Mode</option>
            <option value="">All</option>
            <option value="ONLINE">Online</option>
            <option value="OFFLINE">Offline</option>
          </select>
        </div>
      </div>
      <Row xs={1} sm={2} md={3} lg={3} xl={4} className="g-4">
        {filteredList.map((competition, i) => (
          <Col key={competition.id}>
            <Card className={classes.competitionsCard}>
              <Card.Img variant="top" src={competition.image} className={classes.competitionsImage} />
              <Card.Body>
                <Card.Subtitle className={classes.competitionsSubTitle}>
                  {competition.mode}
                </Card.Subtitle>
                <Card.Title className={classes.competitionsTitle}>{competition.title}</Card.Title>
                <Card.Text className={classes.competitionsDescription}>
                  {competition.description}
                </Card.Text>
                <Button className={classes.competitionsButton} value={competition.id} onClick={(e) => handleShow(competition, i)}>{competition.isEnrolled ? 'Joined' : 'Enrol Now'}</Button>
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
