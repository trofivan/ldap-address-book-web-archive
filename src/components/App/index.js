import React from 'react';
import { Row, Col, Input, Menu, Icon, Affix } from 'antd';
import './App.css';

const Search = Input.Search;

const App = () => (
  <div className="App">
    <Affix>
      <Menu mode="horizontal">
        <Menu.Item key="One">
          <Icon type="arrow-down" />
          Организация
        </Menu.Item>
        <Menu.Item key="Two">Navigation Two</Menu.Item>
        <Menu.Item key="Three">Navigation Three</Menu.Item>
      </Menu>
    </Affix>
    <Row>
      <Col
        xs={{ span: 22, offset: 1 }}
        sm={{ span: 16, offset: 4 }}
        lg={{ span: 10, offset: 7 }}
      >
        <Search
          placeholder="ФИО, организация, должность или отдел"
          size="large"
          autoFocus
        />
      </Col>
    </Row>
  </div>
);

export default App;
