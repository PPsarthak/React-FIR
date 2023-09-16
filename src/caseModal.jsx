import React from 'react';
import Modal from 'react-modal';
// import './caseModal.css'; // Import your CSS styles for the modal here

Modal.setAppElement('#root'); // Set the root element as the app element for accessibility

export default function CaseModal({ isOpen, onClose, caseDetails }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="case-modal"
      overlayClassName="case-modal-overlay"
    >
      <div className="case-content">
        <h2>Case Details</h2>
        <p>Plaintiff's Name: {caseDetails.plaintiffName}</p>
        <p>Victim's Name: {caseDetails.victimName}</p>
        <p>Crime Committed: {caseDetails.crimeCommitted}</p>
        <p>City of Crime: {caseDetails.cityOfCrime}</p>
        <p>Place of Crime: {caseDetails.crimeIncident}</p>
        <p>Time of Incident: {caseDetails.timeOfIncident}</p>
        <p>Report Filed on: {caseDetails.reportFiledOn}</p>
        <p>Assigned Officer's ID: {caseDetails.assignedOfficersID}</p>
        <p>Assigned Officer's Name: {caseDetails.assignedOfficersName}</p>
        {/* Add more case details as needed */}
        <button onClick={onClose}>Close</button>
      </div>
    </Modal>
  );
}
