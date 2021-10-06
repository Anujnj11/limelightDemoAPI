# Demo API Using Strapi API

## Features

- [Swagger link](https://limel-api.herokuapp.com/documentation/v1.0.0)
- CRUD operation on Organization
- CRUD operation on Jobs
- Organization support users with different permission, which are defined *OrganizationRoles*

Public API Endpoint

- Organization

  - GET (https://limel-api.herokuapp.com/organizations)
  - COUNT (https://limel-api.herokuapp.com/organizations/count)
  - FindFirst (https://limel-api.herokuapp.com/organizations/id/findFirst)
- Jobs

  - GET (https://limel-api.herokuapp.com/jobs)
  - COUNT (https://limel-api.herokuapp.com/jobs/count)

## Tables

- OrganizationRole

| OrganizationRole |  type  |
| ---------------- | :----: |
| _id              | string |
| title            | string |

| Job         |  type  |
| ----------- | :----: |
| _id         | string |
| title       | string |
| description | string |

| Organization |          type          |
| ------------ | :--------------------: |
| _id          |         string         |
| title        |         string         |
| description  |         string         |
| website      |         string         |
| location     |         string         |
| jobs         |   Relation with Job   |
| users        | Component (repeatable) |

- COMPONENT Table (Users)

| Users              |    type    |
| ------------------ | :---------: |
| _id                |     _id     |
| admin_user         | string (FK) |
| organization_roles |  _id (FK)  |
