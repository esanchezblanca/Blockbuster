import React, { Component } from 'react';
import axios from 'axios';
import css from './Home.css'


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


    callDetail(movie) {
        this.props.history.push('/detalle');
        localStorage.setItem('movieDetail', JSON.stringify(movie));
    }

    render() {
        return (
            <div className="globalDiv">

                <div className="grid">
                    {
                        this.state.movies.map(
                            item => <div className="divFilms">
                                <div>
                                    <img className="poster" src={item.image} alt={item.image} />
                                    <p>Title: {item.title} </p>
                                    <button className="detailed" onClick={() => this.callDetail(item)}> Detalle </button>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Home;