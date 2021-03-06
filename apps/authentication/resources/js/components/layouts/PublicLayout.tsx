import React, { } from 'react';
import { Link } from 'react-router-dom';

const PublicLayout: React.FC = (props) => {
  return (
    <div className="background-red-50-right height-100">

      <Link to="/"><img src="/images/aos-logo.png" className="logo" /></Link>

      <div className="container height-100">
        <div className="row height-100 d-flex align-items-center">
          <div className="col-lg-6">
            <div className="row left-panel">
              <div className="col-lg-12">
                {props.children}
              </div>
            </div>
          </div>
          <div className="col-lg-6 text-center right-panel">
            <img src="/images/login-layout-logo.svg" alt="AOS Force" />
            <h1 className="white">AOS Force</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PublicLayout;