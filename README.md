# When making a schema change or adding new fields

In the `API/` directory...

- `npm install -g prisma`
- `npm install -g graphql-cli`
- `prisma init server` (first time only)
- Edit the datamodel.prisma file
- `prisma deploy` - deploys the changes to Prisma servers in the sky
- `prisma playground` (optional)

# To run the app locally

In the `Frontend/` directory...

- `npm install -g @vue/cli`
- `vue init`
- `npm install`
- `npm run serve`

# To build for deployment

- `npm run build`
