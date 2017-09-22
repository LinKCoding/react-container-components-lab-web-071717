// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';

class SearchableMovieReviewsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  handleSearch = (event) => {
    event.preventDefault();
    // console.log(URL);
    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0'
    const SEARCH_TERM = event.target.children[0].value
    this.setState({
      searchTerm: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + `${SEARCH_TERM}` + `&api-key=${NYT_API_KEY}`
    })
  }

  componentWillMount(){
    fetch(this.state.searchTerm)
      .then((response) =>
        response.json())
      .then((resp)=>{
        return resp["results"].map(review => {
          return review
        })
      }).then((allReviews) => this.setState({
        reviews: allReviews
      }))
    }


  render() {
    return(
      <div className = "searchable-movie-reviews">
      <form onSubmit={this.handleSearch}>
        Movies: <input id="searchBox" type="text"/>
        <input type="submit" value="Submit" />
      </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer;
