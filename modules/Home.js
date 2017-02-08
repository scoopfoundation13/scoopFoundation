import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Home extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={8} md={8}>home page first half</Col>
            <Col xs={4} md={4}>2nd half</Col>
          </Row>
        </Grid>
      </div>
      );
  }
}

export default Home;
