import React, {Component} from 'react';
import logo from './logo.svg';
import 'antd/dist/antd.css';
import {Layout, Menu} from 'antd';
import Form from "./components/Form";
import Listing from "./components/Listing";
import './App.css';

const { Header, Footer, Content} = Layout;

class App extends Component {
  // parent component holds the state, which is updated by both children form and Listing components
  state = {
    blogs: []
  }
  // method that gets called each time a new blog is added from the form component
  handleNewBlog = (blog) => {
    this.setState({
      blogs: [...this.state.blogs, blog]
    })
  }
  // method passed to Listing component, which get called when a get request is made to the server to retrieve all the blogs at the start of the app
  handleBlogs = (blogs) => {
    this.setState({blogs})
  }

  handledeletedBlog = id => {
    // create a copy of the existing blogs array
    const index = this.state.blogs.findIndex(blog => blog._id === id);
    const blogs = [...this.state.blogs];
    blogs.splice(index, 1);
    this.setState({
      blogs: blogs
    });
  };

  render() {
    const {blogs}= this.state
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
               <Form 
                handleNewBlog={this.handleNewBlog}
               />
               <Listing 
                blogs={blogs}
                handleBlogs={this.handleBlogs}
                handledeletedBlog={this.handledeletedBlog}
                />
            </div>
          </Content>
          <Footer style={{ textAlign: 'center', position: 'sticky', bottom: "0" }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </div>
  );
  }
}

export default App;
