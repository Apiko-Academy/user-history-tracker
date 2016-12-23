# User History Tracker
##### Track user history via url.
---
To start:

1. Add tag to the end of your html file: `<script src="./trackHistory.js"></script>`
2. In `addQueryToLinks` function, change hostnames, whose links you want to track

That`s all. When user loads the page, all links on page with domains we specified in step 2 will be supplemented with query parameter, that describes current route

## Tip
You can use this function to get array with user history:
```
// ES5
var parseQueryToArray = function( queryString ) {
  var params = [], queries, temp, i, l;

  // Split into 'key=value' pairs
  queries = queryString.split("&");

  // Convert the array of strings into an object
  for ( i = 0, l = queries.length; i < l; i++ ) {
    temp = queries[i].split('=');
    params.push(temp[1])
  }

  return params;
};

// ES6
const parseQueryToArray = queryString => {
  // Split into 'key=value' pairs
  const queries = queryString.split("&");
  
  // Get value from pair, ex: 'key=value' => 'value'
  const getValueFromQueryPair = queryPair => queryPair.split('=')[1];
  
  return queries.map(getValueFromQueryPair);
};

```
