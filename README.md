## Getting Started

First, run the development server:

```bash
# Install firt with
yarn install
# and then
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Using Docker

```
# Build the docker image
docker build -t nextjs-docker .

# Run the docker image
docker run -d -p 3000:3000 nextjs-docker

# See the Container ID
docker ps

# Kill and send the custom signal
docker kill --signal=<SIGNAL> <CONTAINER ID>

# See the logs
docker logs <CONTAINER ID>
```

## Not Using Docker

```
yarn dev
# and then Ctrl+C to send SIGINT, it must be showing the termination response 
```
