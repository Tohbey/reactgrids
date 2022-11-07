import CheckboxColumn from ".."
import { render } from "@testing-library/react";

test("checkbox column", () => {
    it("should match snapshot", () =>{
        const component = render(<CheckboxColumn/>);
        expect(component).toMatchSnapshot();
    })
})