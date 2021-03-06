import React from 'react';
import { Link } from 'react-router-dom';
import PrivateLayout from '../layouts/PrivateLayout';

const Dashboard: React.FC = () => {

  return (
    <>
      <PrivateLayout>
        <h2 className="text-center">Bienvenue sur AOS Force</h2>

        <div className="row justify-content-center">
          <div className="col-md-4">
            <Link to="#">
            <div className="card">
              <div className="card-header">Leads Finder</div>
              <div className="card-body text-center">
                <img src="images/Ellipse.png" />
              </div>
              <div className="card-footer text-right">
                Accéder à Leads Finder
              </div>
            </div>
            </Link>
          </div>


          <div className="col-md-4">
            <Link to="#">
            <div className="card">
              <div className="card-header">Project Manager</div>
              <div className="card-body text-center">
                <img src="images/Ellipse21.png" style={{ paddingTop: 14, paddingBottom: 40 }} />
              </div>
              <div className="card-footer text-right">
                Accéder à Project Manager
              </div>
            </div>
            </Link>
          </div>


          <div className="col-md-4">
            <Link to="#">
            <div className="card">
              <div className="card-header">Contract Manager</div>
              <div className="card-body text-center">
                <img src="images/Ellipse22.png" style={{ paddingTop: 14, paddingBottom: 10 }} />
              </div>
              <div className="card-footer text-right">
                Accéder à Contract Manager
              </div>
            </div>
            </Link>
          </div>
        </div>
      </PrivateLayout>
    </>
  );
};


export default Dashboard;
