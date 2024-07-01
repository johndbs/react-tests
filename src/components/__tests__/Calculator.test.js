import {render, screen} from "@testing-library/react";
import { Calculator } from "../Calculator";

describe('<Calculator>', ()=>{

    beforeEach(()=>{
       
    });


    it('has Calculator displayed', ()=>{
        render(<Calculator />);

        const textElement = screen.getByText('Calculator');

        //screen.debug(textElement);

        expect(textElement.textContent).toBe('Calculator');
    });

    it('contains an h1 "calculaor"', ()=>{
        render(<Calculator />);

        const titleElement = screen.getByRole("heading", {level: 1});

        expect(titleElement.textContent).toBe('Calculator');
    });

    it('performs 0+0 by default', ()=>{
        render(<Calculator />);

        const {getValueA, getValueB, getOperator, getResult} = getCalculator();


        expect(getValueA()).toBe("0");
        expect(getValueB()).toBe("0");
        expect(getOperator()).toBe("+");
        expect(getResult()).toBe("0");
    });

    it('use correctly the default values', ()=>{
        render(<Calculator defaultA={42} defaultB={10} defaultOperator={"x"} />);

        const {getValueA, getValueB, getOperator, getResult} = getCalculator();


        expect(getValueA()).toBe("42");
        expect(getValueB()).toBe("10");
        expect(getOperator()).toBe("x");
        expect(getResult()).toBe("420");
    });

    const getCalculator = () => {
        return {
            getValueA: () => screen.getByTestId("inputA").value,
            getValueB: () => screen.getByTestId("inputB").value,
            getOperator: () => screen.getByTestId("inputOperator").value,
            getResult: ()=> screen.getByTestId("result").textContent,
        }
    }


});

