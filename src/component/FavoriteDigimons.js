import React, { Component } from 'react'
  
import axios from 'axios';
import { Card, Button } from 'react-bootstrap/';

export class FavoriteDigimons extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
           
        }
    }
    componentDidMount = async () => {

        let result = await axios.get(`${process.env.REACT_APP_SERVER}/getFavData`);

        this.setState({
            result: result.data
        })


    }
    render() {
        return (
            <div>
                 {this.state.result.map(item => {
                    return (
                        <Card style={{ width: '18rem', display:'inline-block' }}>
                            <Card.Img variant="top" src={item.img} />
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                                <Card.Text>
                                    {item.level}
                                </Card.Text>
                                <Button onClick={() => this.deleteDigimon(item._id)} variant="primary">Delete</Button>
                                <Button onClick={() => this.showFormFun(item._id)} variant="primary">Update</Button>
                            </Card.Body>
                        </Card>)
                })}
                
            </div>
        )
    }
}

export default FavoriteDigimons

