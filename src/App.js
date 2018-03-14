import React from 'react';
import { Row, Col, Input } from 'antd';
import './App.css';

const Search = Input.Search;

const App = () => (
  <div className="App">
    <Row>
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 16, offset: 4 }}
        lg={{ span: 10, offset: 7 }}
      >
        <Search placeholder="ФИО, должность или отдел" size="large" autoFocus />
      </Col>
    </Row>
  </div>
);

export default App;
