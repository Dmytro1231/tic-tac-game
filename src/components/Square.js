import React from 'react';



export const Square = ({value, onClick, iswinningSquares}) => {
    return (
        <div>
            <button 
            type="button"
            className="square"
            onClick={onClick}
            style={{fontWeight: iswinningSquares ? 'bold' : 'normal'}}
            >
            {value}
            </button>
        </div>
    )
}

export default Square;
 