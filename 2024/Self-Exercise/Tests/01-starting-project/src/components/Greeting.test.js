import { render, screen } from "@testing-library/react";
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

})
