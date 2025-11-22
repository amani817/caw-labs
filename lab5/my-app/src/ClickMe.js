import React, { useState } from 'react';
import './ClickMe.css'; 

function ClickMe() {
    const [clicked, setClicked] = useState(false);

    return (
        <div className="click-me">
            <button onClick={() => setClicked(true)}>ClickMe</button>
            <p>{clicked ? 'Clicked' : ''}</p>
        </div>
    );
}

export default ClickMe;