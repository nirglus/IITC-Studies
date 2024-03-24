import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import Greeting from "./Greeting";
describe('Greeting component', () =>{
    test('renders Hello World! as a text ', () => {
        // Arrange - Set up test data, test conditions and test environment
        render(<Greeting/>);
    
        // Act - Run logic that should be tested (f.e execute function)
        // ...nothing
    
        // Assert
        const helloWorldElement = screen.getByText('Hello World');
        expect(helloWorldElement).toBeInTheDocument();
    })

    test(`renders It's good to see you if the button was NOT clicked`, () => {
        render(<Greeting/>);
        const outputElement = screen.getByText(`It's good to see you here`);
        expect(outputElement).toBeInTheDocument();
    });

    test(`renders 'Changed!' if the button was clicked`, () =>{
        render(<Greeting/>);
        // Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText(`Changed!`);
        expect(outputElement).toBeInTheDocument();
    })

    test(`Not render "It's good to see" after button was clicked`, () =>{
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const outputElement = screen.queryByText(`It's good to see you here`);
        expect(outputElement).not.toBeInTheDocument();

    })

})
