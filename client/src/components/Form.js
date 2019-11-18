import React, {Component} from "react";
import {Input} from "antd";
// similar to fetch, its a promise based XHR library to make http requests
import axios from "axios";

const { TextArea } = Input;

class Form extends Component{
    state = {
        title: "",
        description: ""
    }

   onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
        console.log(this.state)
    }
   onSubmit = e => {
    //    prevent default must be run to avoid making a default request to /?title=""?description=""
       e.preventDefault()
        console.log(e)
        axios.post('/api/blogs', {
            title: this.state.title,
            description: this.state.description
        })
        .then((response) => {
            console.log(response)
        })
        .catch(err =>  console.log(err))
        // make a post request to the server
    }

    render(){
        return(
            <div>
                <form>
                    <Input 
                        placeholder="input with clear icon" 
                        allowClear 
                        name="title"
                        onChange={this.onChange} />
                    <br />
                    <br />
                    <TextArea 
                        placeholder="textarea with clear icon" 
                        allowClear 
                        name="description"
                        onChange={this.onChange} />
                    <Input
                        placeholder="input with clear icon"
                        onClick={this.onSubmit} 
                        type="submit"
                        value="Add Blog"
                    />
                </form>
            </div>
        )
    }
}
export default Form
