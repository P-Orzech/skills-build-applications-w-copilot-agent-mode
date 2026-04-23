

import React, { useState } from 'react';
import './App.css';
import logo from '../public/logo192.png';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="App">
      {/* Bootstrap Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src={logo} alt="Octofit Logo" className="octofit-logo" />
            Octofit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Heading */}
      <div className="container mt-4">
        <h1 className="display-4 mb-4">Witamy w Octofit Tracker!</h1>

        {/* Bootstrap Card */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Twoje dzisiejsze aktywności</h5>
            {/* Bootstrap Table */}
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Aktywność</th>
                  <th>Czas trwania</th>
                  <th>Kalorie</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bieganie</td>
                  <td>30 min</td>
                  <td>300</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jazda na rowerze</td>
                  <td>45 min</td>
                  <td>400</td>
                </tr>
              </tbody>
            </table>
            {/* Bootstrap Button */}
            <button className="btn btn-primary me-2" onClick={handleShow}>Dodaj aktywność</button>
            {/* Bootstrap Link */}
            <a href="#" className="btn btn-link">Zobacz wszystkie</a>
          </div>
        </div>

        {/* Bootstrap Form */}
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Dodaj nową aktywność</h5>
            <form>
              <div className="mb-3">
                <label htmlFor="activityName" className="form-label">Nazwa aktywności</label>
                <input type="text" className="form-control" id="activityName" placeholder="np. Pływanie" />
              </div>
              <div className="mb-3">
                <label htmlFor="duration" className="form-label">Czas trwania (min)</label>
                <input type="number" className="form-control" id="duration" />
              </div>
              <div className="mb-3">
                <label htmlFor="calories" className="form-label">Kalorie</label>
                <input type="number" className="form-control" id="calories" />
              </div>
              <button type="submit" className="btn btn-success">Dodaj</button>
            </form>
          </div>
        </div>

        {/* Bootstrap Modal */}
        {showModal && (
          <div className="modal show d-block" tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Dodaj aktywność</h5>
                  <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
                </div>
                <div className="modal-body">
                  <p>Formularz dodawania aktywności (przykład modala).</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" onClick={handleClose}>Zamknij</button>
                  <button type="button" className="btn btn-primary">Zapisz</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
