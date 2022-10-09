# reactjs-grids

Powerful, performant and feature-rich grids for React development.

## Installation

```shell
# with npm
npm install reactjs-grids

# with yarn
yarn add reactjs-grids
```

## Usage

```js
import { ReactGrid } from "reactjs-grids";

const App = () => {
    return (
        <ReactGrid
            columns={[]}
            data={[]}
            onGridLoad={}
        />
    );
}
```

## Props

ReactGrid accepts a wide range of compulsory and optional props and events. Each prop has adds a specific functionality to the component.

| Argument | type   | default                            | notes                                                                       |
| -------- | ------ | ---------------------------------- | --------------------------------------------------------------------------- |
| columns  | array  | ["name","flag","code","dial_code"] | Contains an array of keys that should be returned                           |
| rows     | object | none                               | Required when invoking getSpecificCountry and getSpecifiedCountries methods |

## License

MIT
