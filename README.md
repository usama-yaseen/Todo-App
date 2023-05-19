# Todo App

This is a README file for your React.js application. It provides an overview of the project and instructions for running it in different environments.

## Docker Images

[Server Docker Image](https://hub.docker.com/r/usamayaseenn/todo-backend)

    docker run -d -p 3000:3000 usamayaseenn/todo-backend

[Client Docker Image](https://hub.docker.com/r/usamayaseenn/todo-frontend)

    docker run -d -p 3001:30001 usamayaseenn/todo-frontend

## Prerequisites

Before getting started, ensure that you have the following software installed on your machine:

- Node.js (16.17.0)
- npm (9.2.0)
- yarn (1.22.19)

## Getting Started

Follow the steps below to set up and run the application in your development environment.

1. Clone the repository:

   `git clone https://github.com/usama-yaseen/todo-app`

### Installation and Setup for Front-end

1. Navigate to the project directory:

   `cd front-end`

2. Install dependencies:

   `yarn install`

3. Start the application:

   `yarn start`

This will start the development server on port 3001.

### Installation and Setup for Back-end

1. Navigate to the project directory:

   `cd back-end`

2. Create a .env file in the back-end directory.

3. Open the .env file and add the following content:

   `MONGODB_URI="<Your Local Or Remote MongoDB URI>`

   `JWT_SECRET="<Your JWT Secret Key>`

Replace `<Your Local Or Remote MongoDB URI>` with the actual MongoDB URI for your database `(Can be Local or Remote e.g. Atlas)`, and `<Your JWT Secret Key>` with a secret key of your choice for JWT token generation.

4. Install dependencies:

   `yarn install`

5. Start the application:

   `yarn start`

This will start the development server on port 3000.

### Accessing the Application

Once the front-end and back-end servers are running, you can access the Todo App in your browser by visiting http://localhost:3001.

### 🔑 LICENSE

- This project is licensed under the MIT License - see the [LICENSE](https://github.com/usama-yaseen/Todo-App/blob/main/LICENSE) file for details

### 🧑 Author

#### Usama Yaseen

[Click to Check the LinkedIn Profile ](https://www.linkedin.com/in/usama-yaseen/)

You can also follow my GitHub Profile to stay updated about my latest projects:

    Copyright (c) 2023 Usama Yaseen
