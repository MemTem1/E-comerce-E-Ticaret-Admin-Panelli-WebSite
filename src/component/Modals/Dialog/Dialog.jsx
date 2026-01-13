import React from 'react'
import Proptypes from 'prop-types'
import './Dialog.css'
function Dialog({ isDialogShow, setisDialogShow }) {

    const handleCloseDialog = (e) => {

        const checked = e.target.checked
        console.log(checked);
        localStorage.setItem("dialog", JSON.stringify(!checked));


    }

    return (
        <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
            <div className="modal-content">
                <button className="modal-close" type="button" onClick={() => { setisDialogShow(false) }}>
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
                                <input type="checkbox" onChange={handleCloseDialog} />
                                <span>Don&apos;t show this popup again</span>
                            </label>
                        </form>
                    </div>
                </div>
            </div>
            <div className='modal-overlay' onClick={() => setisDialogShow(false)}>

            </div>
        </div>

    )
}

export default Dialog

Dialog.propTypes = {
    isDialogShow: Proptypes.bool,
    setisDialogShow: Proptypes.func
}