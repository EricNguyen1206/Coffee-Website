import '../styles/review.css'
import QuoteIcon from '../images/quote-img.png'
import ReviewItems from '../apis/ReviewItems.js'
// import StarRatings from './react-star-ratings';

function Review() {

    return (
        <section className="review" id="review">

            <h1 className="heading"> customer's <span>review</span> </h1>

            <div className="box-container">
                {ReviewItems.map(review => (
                    <div key={review.avatar} className="box">
                        <img src={QuoteIcon} alt="" className="quote"/>
                        <p>{review.review}</p>
                        <img src={review.avatar} className="user" alt=""/>
                        <h3>{review.name}</h3>
                        {/* <StarRatings
                            rating={review.star}
                            starRatedColor="yellow"
                            changeRating={false}
                            numberOfStars={5}
                            name='rating'
                        /> */}
                    </div>

                ))}

            </div>

        </section>
    )
}

export default Review
