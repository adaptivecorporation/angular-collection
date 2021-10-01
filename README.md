# Angular Collection
## The Adaptive Corporation
Collection of Angular configuration files, server side rendering related files, and other items.

Last Updated 10/1/2021 - watch this repository for upcoming changes.

## tsconfig/tsconfig.json

Replace your tsconfig.json file with the one inside the tsconfig folder in this repository to get rid of errors such as 'implicit any type' or other unusual linting errors.

## universal/server.ts

Replace your server.ts after installing Angular Universal with the server.ts file found in the universal folder in this repository.

Out of the box, Angular Universal does not support the Window interface. In order to circumvent this, we use a package called 'domino', which is available on NPM. Before running your server with the new script, make sure you install Domino:

```
npm i domino --save
```


## Starting Docker
Starting Docker is easy. Docker-compose makes it even easier, and a configuration file will be included in a future release. After you have correctly placed all of the files based on your project type, simply run the command from your project's root directory:

```
docker build . -t <org_name>/<repo_name>:<tag>

Example:

docker build . -t adaptive/angular-demo:prod
```

Once the build has succeeded, run the following command to start the container and expose port 80 on your local machine:

```
docker run -d -p 80:80 <org_name>/<repo_name>

Example:

docker run -d -p 80:80 adaptive/angular-demo:prod
```

## Docker Status
To see the status of your docker containers, use the command:

```
sudo docker ps
```

You will recieve a table output of the running containers. To stop a container, simple copy the container ID (very left side) and type in the command:

```
docker stop <container_id>
```

To stop and remove the container (delete it), use the following command:

```
docker stop <container_id> && docker rm <container_id>
```