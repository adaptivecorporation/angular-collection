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