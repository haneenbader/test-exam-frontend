import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'

export class Digimon extends Component {
    render() {
        return (
            <div style={{ display:'inline-block' , margin :'5px' }}>
                <Card style={{ width: '18rem' , display:'inline-block' , margin :'5px' }}>
                    <Card.Img variant="top" src={this.props.digimon.img} />
                    <Card.Body>
                        <Card.Title>{this.props.digimon.name}</Card.Title>
                        <Card.Text> {this.props.digimon.level} </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default Digimon

