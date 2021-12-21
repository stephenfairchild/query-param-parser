#### Query Param Parser

The problem:
Sometimes you want to see the full list of query parameters that exist in a URL. It's tedious to inpsect this if the list is very long.

The solution:
This CLI tool wrote in Node will parse those query params for you.

Usage:

`./index.js -u https://some-url.com/inventory?assigneeIdentity[]=f4a2a5fb-ca2d-4c08-88d1-bac749f8c7d9&statuses[]=Team+member+assigned`

Output:
```
[
  'assigneeIdentity[]=f4a2a5fb-ca2d-4c08-88d1-bac749f8c7d9',
  'statuses[]=Team+member+assigned'
]
```

