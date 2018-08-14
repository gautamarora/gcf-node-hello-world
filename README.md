# Hello World Node App for Cloud Functions

This is a sample "Hello World" application for the "Continuous Deployment for Node Apps on GCP" tutorial that works on Cloud Functions.

## Prerequisites

Docker is installed

## Running Locally

```
npm start
npm stop
```

## Testing

```
npm test
```

## Deploying to Kubernetes Engine

```
gcloud beta functions deploy helloWorld --runtime nodejs8 --trigger-http
```

## Deploying to Kubernetes Engine on Github push

Check out to the tutorial (link tbd)
