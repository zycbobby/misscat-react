import React from 'react';
import mui from 'material-ui';
import rb from 'react-bootstrap';

let {Grid, Col, Row} = rb;

import Description from './Description.jsx'

let Login = React.createClass({
  getInitialState() {
    return {};
  },

  componentDidMount() {
  },

  render() {
    return (
      <div>
        <Grid>
          <Row className='show-grid'>
            <Col xs={12} md={8}>
              <Description />
            </Col>
            <Col xs={6} md={4}>
              <Row>
                <mui.TextField
                  disabled={true}
                  defaultValue="LukiWu" />
                <mui.TextField floatingLabelText="Password"/>
              </Row>
              <Row pullRight>
                <mui.RaisedButton label="Login" secondary={true} className="login-btn"/>
              </Row>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
});

module.exports = Login;
