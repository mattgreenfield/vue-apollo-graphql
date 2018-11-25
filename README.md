# How to setup prisma

In the `API/` directory...

`npm install -g prisma`
`npm install -g graphql-cli`
`prisma init server`
Edit the datamodel.prisma file
`prisma deploy`
`prisma playground`

# How to connect vue to prisma

In the `Frontend/` directory...
`npm install -g @vue/cli`
`vue init`
`npm install vue-apollo graphql apollo-client apollo-link apollo-link-http apollo-link-context apollo-cache-inmemory graphql-tag`
Copy a load of imports in to main.js

# vue-basics

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
