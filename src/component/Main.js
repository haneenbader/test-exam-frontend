import React, { Component } from 'react'
import Digimon from './Digimon'
import axios from 'axios'



export class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            result: [],
            addDigimon: []
        }
        console.log(this.state.result);
    }

    componentDidMount = async () => {
        const result = await axios.get(`${process.env.REACT_APP_SERVER}/getData`);
        this.setState({
            result: result.data,
        })
        console.log(this.state.result);

    }

    addToFav = async (data) => {
        const addDigimon = await axios.post(`${process.env.REACT_APP_SERVER}/addToFav`, data);

        this.setState({
            addDigimon: addDigimon.data
        })


    }


    render() {
        return (
            <div>
                {this.state.result.map((item, index) => {
                    return (
                        <Digimon
                            digimon={item}
                            addToFav={this.addToFav}

                        />)
                })}
            </div>
        )
    }
}

export default Main
