import React from 'react'
import './Revievs.css'
import ReviewForm from './ReviewForm'
import ReviewItem from './ReviewItem'
function Revievs() {
    return (
        <div className="tab-panel-reviews">
            <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>

            <div className="comments">
                <div className="comment-list">
                    <ReviewItem />
                    <ReviewItem />
                    <ReviewItem />
                </div>
            </div>

            {/* comment form start */}
            <div className="review-form-wrapper">
                <h2>Add a review</h2>
                <ReviewForm />
            </div>
            {/* comment form end */}
        </div>
    )
}

export default Revievs