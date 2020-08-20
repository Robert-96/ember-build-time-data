# Usage

## Add a JSON file

Create a `data.json` file inside the `/support` folder:

```json
{
    "data": {
        "id": 1,
        "name": "EMERALD",
        "color": "#2ecc71"
    }
}
```

## Import the JSON file

In order you get the data in your components or routes you only need to import it:

```js
import data from '../support/data';
```
