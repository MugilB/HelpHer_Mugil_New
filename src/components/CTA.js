import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import Contact1 from './contact1'
import './cta.css'

const CTA = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        <div className="cta-accent2-bg">
          <div className="cta-accent1-bg">
            <div className="cta-container2">
              <div className="cta-content">
                <span className="thq-heading-2">{props.heading1}</span>
                <p className="thq-body-large">{props.content1}</p>
              </div>
              <div className="cta-actions">
                <button type="button" className="thq-button-filled cta-button">
                  {props.action1}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact1
        email1={
          <Fragment>
            <span className="cta-text3">info@napkindelivery.com</span>
          </Fragment>
        }
        phone1={
          <Fragment>
            <span className="cta-text4">+123-456-7890</span>
          </Fragment>
        }
        address1={
          <Fragment>
            <span className="cta-text5">
              1234 Napkin Ave, Cityville, State, 12345
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="cta-text6">
              Have a question or need assistance?
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="cta-text7">Contact us now!</span>
          </Fragment>
        }
        content3={
          <Fragment>
            <span className="cta-text8">We are here to help.</span>
          </Fragment>
        }
      ></Contact1>
    </div>
  )
}

CTA.defaultProps = {
  action1: 'Subscribe Now',
  content1:
    'Never run out of napkins again! Subscribe to our napkin delivery service and enjoy the convenience of having fresh napkins delivered straight to your home or office.',
  heading1: 'Get Fresh Napkins Delivered to Your Doorstep',
}

CTA.propTypes = {
  action1: PropTypes.string,
  content1: PropTypes.string,
  heading1: PropTypes.string,
}

export default CTA
