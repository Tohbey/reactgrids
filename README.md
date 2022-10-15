# reactgrids

Powerful, performant and feature-rich grid for React development.

## Installation

```shell
# with npm
npm install @toyesebalogun/reactgrids

# with yarn
yarn add @toyesebalogun/reactgrids
```

## Basic Usage

```js
import { ReactGrid } from "@toyesebalogun/reactgrids";

const columns = [
  { name: "name", field: "name", width: 200 },
  { name: "email", field: "email", width: 250 },
  { name: "mobile", field: "phone", width: 140 },
  { name: "gender", field: "gender", width: 90 },
];

const rows = [
  {
    id: 1,
    name: "Paulie Brankley",
    email: "pbrankley0@reference.com",
    phone: "805-477-8432",
    gender: "Male",
  },
  {
    id: 2,
    name: "Roselle Corby",
    email: "rcorby1@linkedin.com",
    phone: "153-117-8104",
    gender: "Female",
  },
  {
    id: 3,
    name: "Thaine Jurges",
    email: "tjurges2@edublogs.org",
    phone: "210-129-7060",
    gender: "Male",
  },
  {
    id: 4,
    name: "Susannah Mansford",
    email: "smansford3@cbc.ca",
    phone: "980-718-9301",
    gender: "Female",
  },
];

const App = () => {
  return <ReactGrid columns={columns} rows={rows} />;
};
```

## Props

ReactGrid accepts a wide range of compulsory and optional props and events. Each prop has adds a specific functionality to the component.

| Props         | Type     | Example                                         | Description                                          |
| ------------- | -------- | ----------------------------------------------- | ---------------------------------------------------- |
| columns       | Array    | [{name: "brand", field:"carbrand", width: 120}] | Contains an array of grid column header definitions. |
| rows          | Array    | [{carbrand: "Mercedes", year: "2022"}]          | Contains an array of grid row data to be rendered.   |
| onGridReady   | Function | (params: GridReadyParams) => //...something     | Accepts a handler function as props                  |
| onRowClicked  | Function | (params: RowClickParams) => //...something      | Accepts a handler function as props                  |
| onCellClicked | Function | (params: CellClickParams) => //...something     | Accepts a handler function as props                  |

## Custom Cell Renderer

```js
import { ReactGrid } from "@toyesebalogun/reactgrids";
import rows from "./rows";
import { customGenderCellRenderer } from "./custom/cells";

const columns = [
  { name: "name", field: "name", width: 200 },
  { name: "email", field: "email", width: 250 },
  { name: "mobile", field: "phone", width: 140 },
  {
    name: "gender",
    field: "gender",
    width: 90,
    colRenderer: customGenderCellRenderer,
  },
];

const App = () => {
  return <ReactGrid columns={columns} rows={rows} />;
};
```

## License

MIT
