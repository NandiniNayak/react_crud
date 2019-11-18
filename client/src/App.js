import React, {Component} from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import Form from "./components/Form";
import Listing from "./components/Listing";
import './App.css';

const { Header, Footer, Content} = Layout;

class App extends Component {
  render() {
    return (
    <div className="App">
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['2']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1">MERN APP</Menu.Item>
              <Menu.Item key="2">Sign in with google</Menu.Item>
              <Menu.Item key="3">Dashboard</Menu.Item>
            </Menu>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
               <Form />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', position: 'sticky', bottom: "0" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </div>
  );
  }
}

export default App;
