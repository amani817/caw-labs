import React, { useState } from 'react';
import './ToggleButton.css'; 

function ToggleButton() {
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="toggle-button">
            <button onClick={() => setIsClicked(!isClicked)}>ClickMe</button>
            <p>{isClicked ? 'Clicked' : 'Not Clicked'}</p>
        </div>
    );
}

export default ToggleButton;    