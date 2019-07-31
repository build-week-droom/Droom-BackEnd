# Droom

```json
"version": "1.0"
"description": "DROOM REST API"
"apihost":  "https://jobdroom.herokuapp.com"
```

### PITCH

  Droom means dream in Dutch. This app helps you find your dream job by swiping right. Think Tinder + LinkedIn

## Request & Response Examples

#### Sample Response

Request Success  ( **200 - OK** || **201 - CREATED** )

```json
  {
    "key": "data",
  }

    ----- OR ------

  [
    {
      "data": "data",
    },
    {
      "key": "data",
    },
    ...
  ]
```

Request Error ( **400 - Bad Request** || **404 - Not Found** || **500 - Internal Server Error** )

```json
  {
    "error": "Error message"
  }
```

### API Endpoints

|                   ENDPOINT                         |            DESCRIPTION                              |
|----------------------------------------------------|-----------------------------------------------------|
| [GET /](#get)                                      | Base URL                                            |
| [POST /api/auth/register](#post-apiauthregister)   | Register new Job Seeker / Company                   |
| [POST /api/auth/login](#post-apiauthlogin)         | Login for User / Company                            |
| [GET /api/company](#get-apicompany)                | Get all Companies                                   |
| [GET /api/company/id](#get-apicompanyid)           | Get a particular Company by ID                      |
| [PUT /api/company](#put-apicompany)                | Update Company Profile                              |
| [GET /api/seekers](#get-apiseekers)                | Get All Job Seekers                                 |
| [GET /api/seekers/id](#get-apiseekersid)           | Get Job Seeker by ID                                |
| [PUT /api/seekers](#put-apiseekers)                | Update a Job Seeker Profile                         |
| [GET /api/jobs](#get-apijobs)                      | Get all Jobs                                        |
| [GET /api/jobs/id](#get-apijobsid)                 | Get a particular Job by ID                          |
| [POST /api/jobs](#post-apijobs)                    | Create a new Job posting                            |
| [PUT /api/jobs/id](#put-apijobsid)                 | Update Job                                          |
| [DELETE /api/jobs/id](#put-apijobs)                | Delete a particular Job                             |
| [GET /api/matches](#get-apimatches)                | Get all Matches by a User                           |
| [POST /api/matches/company](#get-apimatchescompany)| User(Company) can send a potential match(job seeker)|
| [POST /api/matches/seeker](#get-apimatchesseeker)  | User(Job Seeker) can send a potential match(Company)|

#### GET /

Response body:

```json
  {
      "message": "Welcome to Droom API"
  }
```

## Auth

#### POST /api/auth/register

_**Description**: Creates a Job Seeker or Company User account depending on ```"isCompany": "true" or "false"```_.

Request body:

```json
  {
    "name": "John Doe",
    "email": "john@email.com",
    "password": "johnny",
    "isCompany": false
  }
```

Response body:

```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@email.com",
    "isCompany": false,
    "createdAt": "2019-07-29T03:56:42.294Z"
  }
```

#### POST /api/auth/login

_**Description**: Returns a User token, contains User role_.

Request body:

```json
  {
    "email": "john@email.com",
    "password": "johnny"
  }
```

Response body:

```json
  {
    "message": "Welcome, John Doe!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsImVtYWlsIjoiY29tcGFueUBlbWFpbC5jb20iLCJpc0NvbXBhbnkiOnRydWUsImlhdCI6MTU2NDM3MjY0MSwiZXhwIjoxNTY0NDU5MDQxfQ.U5XPvzO7eNw48b4hn4BzIrmNT-yA2b-qABypN-O7BfU"
  }
```

## Company

#### GET /api/company/id

_**Description**: Returns a Company Profile_.

Response body:

```json
  {
    "id": 5,
    "name": "Company Work",
    "email": "companywork@company.com",
    "about": "Company Work, we know that finding the best document management solution for your organization means reducing costs without sacrificing access to information.",
    "location": "Abia, Nigeria",
    "profileImg": "https://res.cloudinary.com/elbon/image/upload/v1561734286/luncher_assets/pfzxjfpkh47yepawxbzf.jpg",
    "jobs": [
        {
            "id": 10,
            "title": "Engineering Recruiting Director",
            "description": "Responsible for leading a safe and educational classroom environment by providing daily care, nurturing and development of children.",
            "location": "Lagos, Nigeria",
            "userId": 5,
            "createdAt": "2019-07-30T09:39:43.205Z"
        },
        {
            "id": 11,
            "title": "Software Engineer",
            "description": "Developing new systems and improving existing systems.",
            "location": "Remote",
            "userId": 5,
            "createdAt": "2019-07-30T09:39:43.205Z"
        },
        ...
    ]
  }
```

#### GET /api/company

_**Description**: Returns all companies_.

Response body:

```json
  [
    {
      "id": 5,
      "name": "Company Work",
      "email": "companywork@company.com",
      "about": "Company Work, we know that finding the best document management solution for your organization means reducing costs without sacrificing access to information.",
      "location": "LocalHost, PORT, 8080",
      "profileImg": "https://res.cloudinary.com/elbon/image/upload/v1561734286/luncher_assets/pfzxjfpkh47yepawxbzf.jpg"
    },
    {
      "id": 6,
      "name": "Company Work",
      "email": "companywork2@company.com",
      "about": "promotions build more momentum for big results.",
      "location": "LocalHost, PORT, 8080",
      "profileImg": "https://res.cloudinary.com/elbon/image/upload/v1561734286/luncher_assets/pfzxjfpkh47yepawxbzf.jpg"
    }
    ...
  ]
```

#### PUT /api/company

_**Description**: Update Company Profile having current authorization token_.

Header

```json
  ...
  Authorization: token(company)
```

Request Body

```json
  {
    "about": "Company Work, we know that finding the best document management solution for your organization means reducing costs without sacrificing access to information.",
    "location": "LocalHost, PORT, 8080",
    "profileImg": "https://res.cloudinary.com/elbon/image/upload/v1561734286/luncher_assets/pfzxjfpkh47yepawxbzf.jpg",
  }
```

Response body:

```json
  {
    "id": 11,
    "about": "Company Work, we know that finding the best document management solution for your organization means reducing costs without sacrificing access to information.",
    "location": "LocalHost, PORT, 8080",
    "profileImg": "https://res.cloudinary.com/elbon/image/upload/v1561734286/luncher_assets/pfzxjfpkh47yepawxbzf.jpg"
  }
```

## Job Seekers

#### GET /api/seekers

_**Description**: Returns all Job Seeker's Profiles_.

Header

```json
  ...
  Authorization: token
```

Response body:

```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@email.com",
      "interests": "Data Analytics, BlockChain",
      "pastExperience": "Devops",
      "location": "",
      "profileImg": ""
    },
    {
      "id": 2,
      "name": "Jane Doe",
      "email": "jane@email.com",
      "interests": "Photography",
      "pastExperience": "Quality Assurance, Data Analytics",
      "location": "",
      "profileImg": ""
    },
    ...
  ]
```

#### GET /api/seekers/id

_**Description**: Returns a Job Seeker's Profile_.

Header

```json
  ...
  Authorization: token
```

Response body:

```json
  [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@email.com",
      "interests": "Data Analytics, BlockChain",
      "pastExperience": "Devops",
      "location": "",
      "profileImg": ""
    }
    ...
  ]
```

#### PUT /api/seekers

_**Description**: Update Job Seeker Profile having current authorization token_.

Header

```json
  ...
  Authorization: token(job seeker)
```

Request Body

```json
  {
    "interests": "Data Analytics, BlockChain",
    "pastExperience": "Devops",
    "location": "LocalHost, Port, 8080",
    "profileImg": "https://res.cloudinary.com/elbon/image/upload/v1561734286/luncher_assets/pfzxjfpkh47yepawxbzf.jpg"
  }
```

Response body:

```json
  {
    "id": 1,
    "name": "John Doe",
    "email": "john@email.com",
    "interests": "Data Analytics, BlockChain",
    "pastExperience": "Devops",
    "location": "LocalHost, Port, 8080",
    "profileImg": "https://res.cloudinary.com/elbon/image/upload/v1561734286/luncher_assets/pfzxjfpkh47yepawxbzf.jpg",
  }
```

## Jobs

#### GET /api/jobs

_**Description**: Returns all Jobs Postings_.

Header

```json
  ...
  Authorization: token
```

Response body:

```json
  [
    {
      "id": 1,
      "title": "Delivery Driver",
      "description": "You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.",
      "location": "Job Location on the Moon",
      "companyId": 6,
      "company": "Company Name I",
      "email": "companyII@company.com",
      "createdAt": "2019-07-29T03:41:22.513Z"
    },
    {
      "id": 2,
      "title": "Entry Level Marketing and Public Relations",
      "description": "We are actively seeking Entry-Level Professionals for our public relations & sales marketing team!",
      "location": "Job Location on the Sun",
      "companyId": 7,
      "company": "Company Name II",
      "email": "companyII@company.com",
      "createdAt": "2019-07-29T03:41:22.513Z"
    }
    ...
  ]
```

#### GET /api/jobs/id

_**Description**: Returns a particular Job_.

Header

```json
  ...
  Authorization: token
```

Response body:

```json
  {
    "id": 1,
    "title": "Delivery Driver",
    "description": "You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.",
    "location": "Job Location on the Moon",
    "companyId": 7,
    "company": "Company Name I",
    "email": "companyII@company.com",
    "createdAt": "2019-07-29T03:41:22.513Z"
  }
````

#### POST /api/jobs

_**Description**: Create a new Job posting by current Company authorization token_.

Header

```json
  ...
  Authorization: token(company)
```

Request body:

```json
  {
    "title": "Delivery Driver",
    "description": "You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.",
    "location": "Job Location on the Moon",
  }
```

Response body:

```json
  {
    "id": 1,
    "title": "Delivery Driver",
    "description": "You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.",
    "location": "Job Location on the Moon",
    "userId": 13,
    "createdAt": "2019-07-29T03:41:22.513Z"
  }
```

#### PUT /api/jobs/id

_**Description**: Updates existing Job posting by current Company authorization token_.

Header

```json
  ...
  Authorization: token(company)
```

Request body:

```json
  {
    "title": "Delivery Driver updated",
    "description": "You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.",
    "location": "Job Location on the Moon",
  }
```

Response body:

```json
  {
    "id": 1,
    "title": "Delivery Driver updated",
    "description": "You’ll play a critical role in delivering on our promise to provide our customers with excellent customer service.",
    "location": "Job Location on the Moon",
    "userId": 13,
    "createdAt": "2019-07-29T03:41:22.513Z"
  }
```

#### DELETE /api/jobs/id

_**Description**: Deletes existing Job posting by current Company authorization token_.

Header

```json
  ...
  Authorization: token(company)
```

Response body: (**204 - No Content**)

```json
  
```

## Matches

#### GET /api/matches

_**Description**: Return all matches for user wth token_.

Header

```json
  ...
  Authorization: token
```

Response body:

```json
  [
    {
        "id": 4,
        "companyId": 2,
        "companyName": "test company2",
        "jobSeekerId": 3,
        "jobSeekerName": "test jobseeker1",
        "createdAt": "2019-07-31T11:57:45.455Z",
        "matchedAt": "2019-07-31T11:57:49.798Z",
        "isMatch": true
    },
    {
        "id": 3,
        "companyId": 2,
        "companyName": "test company2",
        "jobSeekerId": 4,
        "jobSeekerName": "test jobseeker2",
        "createdAt": "2019-07-31T11:57:45.455Z",
        "matchedAt": "2019-07-31T11:57:45.453Z",
        "isMatch": true
    }
    ...
  ]
```

#### POST /api/matches/company

_**Description**: User(company) can add a potential match(Job seeker).

Header

```json
  ...
  Authorization: token(company)
```

Request body:

```json
  {
    "match": 2(jobseekerId)
  }
```

Response body:

```json
  {
    "id": 3,
    "companyId": 1,
    "jobSeekerId": 2,
    "createdAt": "2019-07-31T11:57:45.455Z",
    "matchedAt": "2019-07-31T12:10:29.124Z",
    "isMatch": false || true
}
```

#### POST /api/matches/seeker

_**Description**: User(job seeker) can add a potential match(company)._

Header

```json
  ...
  Authorization: token(company)
```

Request body:

```json
  {
    "match": 2(companyId)
  }
```

Response body:

```json
  {
    "id": 3,
    "companyId": 2,
    "jobSeekerId": 2,
    "createdAt": "2019-07-31T11:57:45.455Z",
    "matchedAt": "2019-07-31T12:10:29.124Z",
    "isMatch": false || true
}
```

## Technologies

- Node | Express | hapi/joi | bcryptjs | cors | knex | Postgres | Jest | Supertest
