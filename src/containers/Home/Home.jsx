import React, { Component } from 'react';


class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: [],
            page: 1
        }
    }

    componentDidMount(){
        this.getMovieList();
    }

    getMovieList(page) {
        axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=479c2920a277283ba2e63633bbcc98d6&page=${page}`)
        // https://videoclub-mongo.herokuapp.com/
            .then(api => {
                console.log(api)
                this.setState({ movies: api.data.results })
            })
            .catch(err => console.log(err));
    }


    render() {
        return (
            
        )
    }
}

export default Home