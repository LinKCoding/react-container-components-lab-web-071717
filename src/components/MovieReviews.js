// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  // console.log(props.reviews);
  let allReviews = props.reviews.map((review, index) => {
    return <div className="review" key={index}>{review["display_title"]}</div>
  })

  return(
    <div className = "review-list">
      {allReviews}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
