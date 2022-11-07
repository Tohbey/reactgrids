import { render } from "@testing-library/react";
import CustomColumn from "..";

test("checkbox column", () => {
    it("should match snapshot", () =>{
        const component = render(<CustomColumn/>);
        expect(component).toMatchSnapshot();
    })
})