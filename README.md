# Type Express

![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/ypk46/generator-type-express)
![GitHub package.json version](https://img.shields.io/github/package-json/v/ypk46/generator-type-express)

Type Express is a Yeoman Generator for Express + Typescript projects. Generate a functional Express API in just a few seconds.

## Installation

You will need the Yeoman package in order to use this generator. So let's install it along with our generator:

```shell
npm install -g yo generator-type-express
```

## Usage

To create a new project, just run the following command:

```shell
yo type-express <project name> --yarn
cd <project name>
```

There are a couple of scripts to start your server:

```shell
# Run the server without hot reload
yarn dev

# Run the server with hot reload
yarn watch

# Build and run compiled JS
yarn build
yarn start
```

## Docker Support

The generated project comes with ready to use Dockerfile, so you just have to build your image.

```shell
docker build -t <image name> .
```
