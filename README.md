# notion + nextjs(app router) simple blog

## notion setup

### content setup

- create a blank page

- create a table

- add following fields
  - `Title`
  - `Slug`
  - `Description`
  - `Date`
  - `Published`

or simply duplicate [this](https://magical-join-3e7.notion.site/aad4c9d25c7d47129c2429380f4d4bd9?v=159354428c814c3797f90e5a1a30d34a&pvs=4)

### database setup

- create [notion integration](https://magical-join-3e7.notion.site/aad4c9d25c7d47129c2429380f4d4bd9?v=159354428c814c3797f90e5a1a30d34a&pvs=4)
- save the token to `NOTION_TOKEN` in .env
- get database id from url and save to `NOTION_DATABASE_ID` ( https://www.notion.so/***aad4c9d25c7d47129c2429380f4d4bd9***?v=159354428c814c3797f90e5a1a30d34a )
- connect your integration to your database (3 dots in top right corner -> "Connect to" --> select the integration you just created)
