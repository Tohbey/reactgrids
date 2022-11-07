import { render } from "@testing-library/react";
import ReactGrid from "..";

test("checkbox column", () => {
    it("should match snapshot", () =>{
        const component = render(<ReactGrid/>);
        expect(component).toMatchSnapshot();
    })
})