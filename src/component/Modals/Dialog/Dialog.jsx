import React from 'react'
import './Dialog.css'
function Dialog() {
    return (
        <div className="modal-dialog">
            <div className="modal-content">
                <button className="modal-close" type="button">
                    <i className="bi bi-x"></i>
                </button>

                <div className="modal-image">
                    <img src="img/modal-dialog.jpg" alt="" />
                </div>

                <div className="popup-wrapper">
                    <div className="popup-content">
                        <div className="popup-title">
                            <h3>NEWSLETTER</h3>
                        </div>

                        <p className="popup-text">
                            Sign up to our newsletter and get exclusive deals you won&apos;t find
                            any where else straight to your inbox!
                        </p>

                        <form className="popup-form">
                            <input type="text" placeholder="Enter Email Address Here" />

                            <button className="btn btn-primary" type="submit">
                                SUBSCRIBE
                            </button>

                            <label>
                                <input type="checkbox" />
                                <span>Don&apos;t show this popup again</span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Dialog