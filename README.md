# reactgrids

Powerful, performant and feature-rich grid for React development.

## Installation

```shell
# with npm
npm install @toyesebalogun/reactgrids

# with yarn
yarn add @toyesebalogun/reactgrids
```

## Usage

```js
import { ReactGrid } from "@toyesebalogun/reactgrids";

const App = () => {
  return <ReactGrid columns={[]} data={[]} />;
};
```

## Props

ReactGrid accepts a wide range of compulsory and optional props and events. Each prop has adds a specific functionality to the component.

| Props       | Type     | Example                                         | Description                                          |
| ----------- | -------- | ----------------------------------------------- | ---------------------------------------------------- |
| columns     | Array    | [{name: "brand", field:"carbrand", width: 120}] | Contains an array of grid column header definitions. |
| rows        | Array    | [{carbrand: "Mercedes", year: "2022"}]          | Contains an array of grid row data to be rendered.   |
| onGridReady | Function | (params: GridReadyParams) => //Something        | Accepts a handler function as props                  |

## License

MIT
