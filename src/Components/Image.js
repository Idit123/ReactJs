import React, { Component } from 'react'


export default class Image extends Component {
    constructor(props) {
        super(props)
        this.state = {
            file: null
        }
      
    }
     preview = (e)=> {
        this.setState({
            file: URL.createObjectURL(e.target.files[0])
        })
    }
    render() {
        return (
            <div>
                <span>Image:</span>
                <br/><br/>
                <input type="file" onChange={this.preview} />
                <br/><br/>
                <img src={this.state.file} width="400" height="300" alt=""/>
            </div>
        )
    }
}
