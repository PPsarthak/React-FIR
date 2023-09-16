import React from 'react';

function CaseModal({ caseDetails, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        {/* Display case details here */}
        <h2>Case Details</h2>
        <p>Plaintiff's Name: {caseDetails.plaintiffName}</p>
        <p>Victim's Name: {caseDetails.victimName}</p>
        <p>Crime Committed: {caseDetails.crimeCommitted}</p>
        <p>City of Crime: {caseDetails.cityOfCrime}</p>
        {/* Add more details */}
        {/* Close button */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CaseModal;
