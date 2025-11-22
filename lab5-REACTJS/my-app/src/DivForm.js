import React, { useState } from 'react';
function DivForm() {
    const [size, setSize] = useState({ height: '', width: '', color: '' });
    const [divs, setDivs] = useState([]);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (size.height && size.width && size.color) {
            setDivs([...divs, size]);
            setSize({ height: '', width: '', color: '' });
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={size.height} 
                    onChange={(e) => setSize({ ...size, height: e.target.value })} 
                    placeholder="Height  (px)" 
                    required 
                />
                <input  type="text"  value={size.width} 
                    onChange={(e) => setSize({ ...size, width: e.target.value })} 
                    placeholder="Width (px)"  required 
                />
                <input  type="text"  value={size.color} 
                    onChange={(e) => setSize({ ...size, color: e.target.value })} 
                    placeholder="Background Color"  required 
                />
                <button type="submit">Add Div</button>
            </form>
            <div style={{ marginTop: "20px" }}>
                {divs.map((div, index) => (
                    <div 
                        key={index} 
                        style={{ 
                            height: div.height, 
                            width: div.width, 
                            backgroundColor: div.color, 
                            margin: '10px 0',
                            border: '1px solid #ccc' 
                        }}
                    >
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DivForm;