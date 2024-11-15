import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact1.css'

const Contact1 = (props) => {
  return (
    <div className="contact1-contact20 thq-section-padding">
      <div className="contact1-max-width thq-section-max-width">
        <div className="contact1-content1">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
          </svg>
          <div className="contact1-contact-info1">
            <div className="contact1-content2">
              <h3 className="contact1-text10 thq-heading-3">Email</h3>
              <p className="contact1-text11 thq-body-large">
                {props.content1 ?? (
                  <Fragment>
                    <span className="contact1-text18">
                      Have a question or need assistance?
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <span className="contact1-email thq-body-small">
              {props.email1 ?? (
                <Fragment>
                  <span className="contact1-text17">
                    info@napkindelivery.com
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact1-content3">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M282 460q96 186 282 282l94-94q20-20 44-10 72 24 152 24 18 0 30 12t12 30v150q0 18-12 30t-30 12q-300 0-513-213t-213-513q0-18 12-30t30-12h150q18 0 30 12t12 30q0 80 24 152 8 26-10 44z"></path>
          </svg>
          <div className="contact1-contact-info2">
            <div className="contact1-content4">
              <h3 className="contact1-text12 thq-heading-3">Phone</h3>
              <p className="contact1-text13 thq-body-large">
                {props.content2 ?? (
                  <Fragment>
                    <span className="contact1-text20">Contact us now!</span>
                  </Fragment>
                )}
              </p>
            </div>
            <span className="contact1-phone thq-body-small">
              {props.phone1 ?? (
                <Fragment>
                  <span className="contact1-text19">+123-456-7890</span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
        <div className="contact1-content5">
          <svg viewBox="0 0 1024 1024" className="thq-icon-medium">
            <path d="M512 0c-176.732 0-320 143.268-320 320 0 320 320 704 320 704s320-384 320-704c0-176.732-143.27-320-320-320zM512 512c-106.040 0-192-85.96-192-192s85.96-192 192-192 192 85.96 192 192-85.96 192-192 192z"></path>
          </svg>
          <div className="contact1-contact-info3">
            <div className="contact1-content6">
              <h3 className="contact1-text14 thq-heading-3">Office</h3>
              <p className="contact1-text15 thq-body-large">
                {props.content3 ?? (
                  <Fragment>
                    <span className="contact1-text21">
                      We are here to help.
                    </span>
                  </Fragment>
                )}
              </p>
            </div>
            <span className="contact1-address thq-body-small">
              {props.address1 ?? (
                <Fragment>
                  <span className="contact1-text16">
                    1234 Napkin Ave, Cityville, State, 12345
                  </span>
                </Fragment>
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact1.defaultProps = {
  address1: undefined,
  email1: undefined,
  content1: undefined,
  phone1: undefined,
  content2: undefined,
  content3: undefined,
}

Contact1.propTypes = {
  address1: PropTypes.element,
  email1: PropTypes.element,
  content1: PropTypes.element,
  phone1: PropTypes.element,
  content2: PropTypes.element,
  content3: PropTypes.element,
}

export default Contact1
