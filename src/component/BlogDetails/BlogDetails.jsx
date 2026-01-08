import React from 'react'
import './BlogDetails.css'
import Revievs from '../Revievs/Revievs'
function BlogDetails() {
    return (
        <section className="single-blog">
            <div className="container">
                <article>
                    <figure>
                        <a href="#">
                            <img src="img/blogs/blog1.jpg" alt="" />
                        </a>
                    </figure>

                    <div className="blog-wrapper">
                        <div className="blog-meta">
                            <div className="blog-category">
                                <a href="#">COLLECTION</a>
                            </div>
                            <div className="blog-date">
                                <a href="#">April 25, 2022</a>
                            </div>
                            <div className="blog-tags">
                                <a href="#">products</a>, <a href="#">coats</a>
                            </div>
                        </div>

                        <h1 className="blog-title">The Best Products That Shape Fashion</h1>

                        <div className="blog-content">
                            <p>
                                Donec rhoncus quis diam sit amet faucibus. Vivamus pellentesque, sem sed
                                convallis ultricies, ante eros laoreet libero, vitae suscipit lorem
                                turpis sit amet lectus.
                            </p>

                            <p>
                                Nulla id nibh ligula. Etiam finibus elit nec nisl faucibus, vel auctor
                                tortor iaculis.
                            </p>

                            <blockquote>
                                <p>
                                    Aliquam purus enim, fringilla vel nunc imperdiet, consequat ultricies
                                    massa.
                                </p>
                            </blockquote>

                            <p>
                                Vivamus libero leo, tincidunt eget lectus rhoncus, finibus interdum neque.
                            </p>

                            <p>
                                Donec feugiat tincidunt eros, ac aliquam purus egestas condimentum.
                            </p>

                            <p>
                                Nunc blandit ligula mi, quis commodo dolor fermentum sit amet.
                            </p>
                        </div>
                    </div>
                </article>

                <Revievs />
            </div>
        </section>

    )
}

export default BlogDetails