import React, { Component } from 'react';
import axios from 'axios';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
        }
    }

    componentDidMount() {
        this.getMovieList();
    }

    getMovieList() {
        axios.get(`http://localhost:5000/movies`)

            .then(api => {
                console.log(api)
                this.setState({ movies: api.data })
            })
            .catch(err => console.log(err));
    }


    render() {
        return (

            <div className="grid">
                {
                    this.state.movies.map(
                        item =>
                            <div>
                                <img src={item.image} alt={item.image} />
                                <p>Title: {item.title} </p>
                                {/* <button className="detailed" onClick={() => this.callDetail(item)}> Detailed view </button> */}
                            </div>
                    )
                }
            </div>
        )
    }
}

export default Home;