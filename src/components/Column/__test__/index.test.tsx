import { render } from "@testing-library/react";
import Column from "..";

test("checkbox column", () => {
    it("should match snapshot", () =>{
        const component = render(<Column/>);
        expect(component).toMatchSnapshot();
    })
})