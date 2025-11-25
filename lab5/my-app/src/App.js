import React, { useState } from 'react';
import ClickMe from './ClickMe';
import ToggleButton from './ToggleButton';
import DisplayTab from './DisplayTab';
import AuthForm from './AuthForm';
import DivForm from './DivForm';
import Counter from './Counter';
import './App.css'; 

function App() {
    const [message, setMessage] = useState('');

    const handleClick = (buttonNumber) => {
        setMessage(`Button #${buttonNumber} was clicked`);
    };

    const tab1 = ["hello", "world", "from", "react"];
    const tab2 = ["welcome", "to", "the", "universe"];

    return (
        <div className="app"> 
            <h2>Exercice 1</h2>
            <ClickMe />
            <ToggleButton />
            <button onClick={() => handleClick(1)}>Button 1</button>
            <button onClick={() => handleClick(2)}>Button 2</button>
            <button onClick={() => handleClick(3)}>Button 3</button>
            <p>{message}</p>
            <Counter />
            <h2>Exercice 2</h2>
            <h5>Tableau 1:</h5>
            <DisplayTab initialTab={tab1} />
            <h5>Tableau 2:</h5>
            <DisplayTab initialTab={tab2} />
            <h2>Exercice 3</h2>
            <AuthForm />
            <h2>Exercice 4</h2>
            <DivForm />
        </div>
    );
}

export default App;