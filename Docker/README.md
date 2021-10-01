# Angular Docker

## Getting started
Copy the Dockerfile and the conf folder to your parent project directory.

Edit the Dockerfile (line 8) and replace angular-project with the name of your project.

Change:

```
COPY --from=node /usr/src/app/dist/angular-project /usr/share/nginx/html
```

To:

```
COPY --from=node /usr/src/app/dist/projectName /usr/share/nginx/html
```


## Angular Universal
Angular Universal uses a node express server, while a standard Angular Docker deployment would use an nginx or apache server. This requires a different Dockerfile. Navigate to the universal folder within this folder of the repository and copy the Dockerfile into the root directory of your project.