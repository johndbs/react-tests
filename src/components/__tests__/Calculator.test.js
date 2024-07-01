import {fireEvent, render, screen} from "@testing-library/react";
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

    it("calculate correctly when the user update an input", ()=>{
        render(<Calculator defaultA={42} defaultB={10} defaultOperator={"x"} />);

        const {getValueA, getValueB, getOperator, getResult} = getCalculator();

        fireEvent.change(screen.getByTestId("inputA"), {target: {value: 3}});
        fireEvent.change(screen.getByTestId("inputB"), {target: {value: 4}});
        fireEvent.change(screen.getByTestId("inputOperator"), {target: {value: "-"}});

        expect(getValueA()).toBe("3");
        expect(getValueB()).toBe("4");
        expect(getOperator()).toBe("-");
        expect(getResult()).toBe("-1");
    });

    it("displays an error when we divide by 0", ()=>{
        render(<Calculator defaultA={0} defaultB={0} defaultOperator={"/"} />);

        const {getValueA, getValueB, getOperator, getResult} = getCalculator();

        expect(getValueA()).toBe("0");
        expect(getValueB()).toBe("0");
        expect(getOperator()).toBe("/");
        expect(getResult()).toBe("You can't divide by 0");
    });

    it("displays an error when invalid operator", ()=>{
        render(<Calculator defaultA={0} defaultB={0} defaultOperator={"+"} />);

        const {getResult} = getCalculator();

        fireEvent.change(screen.getByTestId("inputOperator"), {target: {value: "unknown operator"}})


        expect(getResult()).toBe("No operator provided");
    });

    it("empty input value should be replace by 0", ()=>{
        render(<Calculator defaultA={10} defaultB={10} defaultOperator={"-"} />);

        const {getValueA, getValueB, getOperator, getResult} = getCalculator();

        fireEvent.change(screen.getByTestId("inputA"), {target: {value: ""}});
        fireEvent.change(screen.getByTestId("inputB"), {target: {value: ""}});

        expect(getValueA()).toBe("0");
        expect(getValueB()).toBe("0");
        expect(getOperator()).toBe("-");
        expect(getResult()).toBe("0");
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

