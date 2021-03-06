# Contributing

Thanks for taking the time and thinking about contributing to Docfox. We look forward to your ideas, feedback, and PRs!

## Prerequisites

🚀 Node.js >=10
🌲 Git
🐈 yarn >= 1.12

## Getting started

```sh
git clone git@github.com:woodlike/docs.git
cd docs
# Install packages
yarn
```

## Commands

The list of most important commands to work with the selected workspace.

| Commands           | Package               | Description                                            |
| ------------------ | --------------------- | ------------------------------------------------------ |
| `yarn build:theme` | **gatsby-theme-docs** | compile Typescript into JavaScript                     |
| `yarn build:docs`  | **docs**              | compile Typescript into JavaScript                     |
| `yarn dev:theme`   | **gatsby-theme-docs** | compile Typescript into JavaScript in watch mode       |
| `yarn dev:docs`    | **docs**              | compile Typescript into JavaScript in watch mode       |
| `yarn lint:theme`  | **gatsby-theme-docs** | Lint the package according to the Eslint configuration |
| `yarn lint:docs`   | **docs**              | Lint the package according to the Eslint configuration |
| `yarn test:theme`  | **gatsby-theme-docs** | Run unit tests written with Jest                       |
| `yarn type-check`  | **gatsby-theme-docs** | Run unit tests written with Jest                       |
