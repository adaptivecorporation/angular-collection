# Angular Collection
## The Adaptive Corporation
####Collection of Angular configuration files, server side rendering related files, and other items.
Last Updated 10/1/2021 - watch this repository for upcoming changes.

## tsconfig.json

Replace your tsconfig.json file with the one inside this repository to get rid of errors such as 'implicit any type' or other unusual linting errors.

## server.ts

Replacement server.ts file for Angular Universal installations. Out of the box, Angular Universal does not support the Window interface. In order to circumvent this, we use a package called 'domino', which is available on NPM. Before running your server with the new script, make sure you install Domino:

```
npm i domino --save
```

