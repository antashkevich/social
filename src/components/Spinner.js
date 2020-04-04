import React from 'react';

let Spinner = () => {
    return  <svg className="spinner" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" fill="none" stroke="#5181b8" strokeWidth="6" r="35" strokeDasharray="164.93361431346415 56.97787143782138" transform="rotate(107.622 50 50)">
            <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
        </circle>
    </svg>;
}

export default Spinner;
