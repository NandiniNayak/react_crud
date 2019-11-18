import React, { Component } from "react";
import axios from "axios"

class Listing extends Component {
    constructor(props){
        super(props)
    }
    fetchBlogs = async () => {
        let response = await axios.get('/api/blogs');
        let blogs = response.data
        // console.log( blogs)
        // this.setState({blogs})
        this.props.handleBlogs(blogs);
    }
    // make an api call to fetch all the blogs from backend
    // CDM runs after render, this is the best place to make any api call
    componentDidMount() {
        this.fetchBlogs();
    }
    render() {
        return (
            <div>
                {this.props.blogs.map(blog => {
                   return (<div key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.description}</p>
                    </div>)
                })}
            </div> 
        )
    }
}
export default Listing
