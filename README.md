# Creating a server with Express

In this example, we will create a simple server with Express a fast, unopinionated, minimalist web framework for Node.js.

### Getting started with Express

Let's start with adding dependency:

```
yarn add express
```

### Deploy with Now

First we need to create a `now.json` configuration file to instruct Now how to build the project.

For this example we will be using our newest version [Now 2.0](https://zeit.co/now).

By adding the `version` key to the `now.json` file, we can specify which Now Platform version to use.

We also need to define each builders we would like to use. [Builders](https://zeit.co/docs/v2/deployments/builders/overview/) are modules that take a deployment's source and return an output, consisting of [either static files or dynamic Lambdas](https://zeit.co/docs/v2/deployments/builds/#sources-and-outputs).

In this case we are going to use `@now/node` in order to start a Node.js server using Express, also we will need to add a [`routes`](https://zeit.co/docs/v2/deployments/configuration#routes) key instructing Now to forward and handle all routes on Express.

We will also define a name for our project (optional).

```json
{
    "version": 2,
    "name": "nodejs-express",
    "builds": [
        { "src": "index.js", "use": "@now/node" }
    ],
    "routes": [
        { "src": "/(.*)", "dest": "index.js" }
    ]
}
```

Visit our [documentation](https://zeit.co/docs/v2/deployments/configuration) for more information on the `now.json` configuration file.

We are now ready to deploy the app.

```
now
```
