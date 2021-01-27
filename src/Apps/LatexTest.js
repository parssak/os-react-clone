import React from 'react';
import Latex from 'react-latex';
const output = "hello world 3/4";

const macros = { "\\RR": "\\mathbb{R}" }
const LatexTest = () => {
    return (
        <div>
            <h3>
                <Latex>What is $(3\times 4) \div (5-3) \in \R^+_12 $</Latex>
            </h3>
            
        </div>
    );
}

export default LatexTest;
