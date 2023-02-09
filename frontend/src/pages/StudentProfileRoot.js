import { Outlet, redirect } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import { Row, Col } from "react-bootstrap";
import classes from './StudentProfileRoot.module.css'

import StudentsMainNavigation from '../components/StudentsMainNavigation';
import { getAuthToken } from '../util/auth';

function StudentProfileRootLayout() {
  return (
    <>
      <StudentsMainNavigation />
      <div className={classes.margin}>
        <Row className={classes.rowMargin}>
          <Col xs={4} sm={4} md={3} lg={2}><Sidebar /></Col>
          <Col xs={8} sm={8} md={9} lg={10}><Outlet /></Col>
        </Row>
      </div>
    </>
  );
}

export default StudentProfileRootLayout;

export async function loader() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/login');
  }
  else {
    return null;
  }
}