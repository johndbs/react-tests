import { useState } from "react"
import { divide, multiply, substract, sum } from "../utils/math-functions";

const OPERATORS = ['+', '-', 'x', '/'];

export function Calculator({defaultA, defaultB, defaultOperator}){

    const [inputValueA, setInputValueA] = useState(!defaultA || isNaN(defaultA) ? 0 : Number(defaultA));
    const [inputValueB, setInputValueB] = useState(!defaultB || isNaN(defaultB) ? 0 : Number(defaultB)) ;
    const [operator, setOperator] = useState(OPERATORS.includes(defaultOperator) ? defaultOperator : '+');


    const getResult = () => {
        switch(operator) {
            case '+':
                return sum(inputValueA, inputValueB);
            case '-':
                return substract(inputValueA,inputValueB);
            case 'x':
                return multiply(inputValueA, inputValueB);
            case '/':
                return divideSafely(inputValueA, inputValueB)
            default: 
                return "No operator provided";
        }
    };

    const divideSafely = (a, b) => {
        try{
            divide(a,b);
        }catch(err){
            return err.message;
        }
    }

    const renderInputA = () =>{
        return (<input value={inputValueA} 
            type="number" 
            onChange={(e) => setInputValueA(e.target.value ? Number.parseFloat(e.target.value) : 0)} 
            data-testid="inputA"
            />) ;
    };

    const renderInputB = () =>{
        return (<input value={inputValueB} 
            type="number" 
            onChange={(e) => setInputValueB(e.target.value ? Number.parseFloat(e.target.value) : 0)} 
            data-testid="inputB"
            />) ;
    };

    const renderSelectOperator = () => {
        return(<select value={operator} onChange={(e) => setOperator(e.target.value)} data-testid="inputOperator">
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="x">x</option>
            <option value="/">/</option>
        </select>);
    };


    return <>
        <h1 style={{marginBottom: 40}}>Calculator</h1>

        {renderInputA()}
        {renderInputB()}
        {renderSelectOperator()}

        <h2 style={{margin: 20}}>Result</h2>
        <span data-testid="result">{getResult()}</span>
    </>
}