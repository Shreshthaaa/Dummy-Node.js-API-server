# Node.js API Project

## Overview 

This project is a Node.js API server built with Express. It provides endpoints to interact with dummy JSON data, including functionalities for filtering, sorting, and retrieving data.

## Features

- Fetch dummy JSON data
- Filter data by multiple fields
- Sort data by multiple fields

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Table of Contents

- [Installation](#installation)
- [Running the project locally](#running-the-project-locally)
- [Testing the API](#testing-the-api)
- [Postman Documentation](#postman-documentation)
- [API Endpoints](#api-endpoints)
- [Examples](#examples)

## Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Shreshthaaa/Rocketium.git
   ```

2. **Navigate to the Project Directory**

    ```sh
    cd your-repo-name
    ```

3. **Install Dependencies**

    First, install the project dependencies defined in `package.json`.
    ```sh
    npm install
    ```
    Then, install `express` and `axios` if they are not already listed in `package.json`.     
    ```sh
    npm install express axios
    ```

4. **Verify Installation**

    Check that express and axios are listed in your package.json file under dependencies:

    ```sh
    "dependencies": {
        "express": "^x.x.x",
        "axios": "^x.x.x"
    }
    ```

## Running the Project Locally

1. **Start the Server**

    The server will run on http://localhost:3000.

    ```sh
    npm start
    ```

2. **Access the API**

- GET `/`: Fetch all data
- GET `/?id=<id>`: Filter by id
- GET `/?name=<name>`: Filter by name
- GET `/?language=<language>` : Filter by language
- GET `/?name=<name>&sortBy=<field>,<field>&sortOrder=<asc|desc>` : Filter by multiple fields and sort
- GET `/?sortBy=<field>&sortOrder=<asc|desc>`: Sort by specified field and order
- GET `/?sortBy=<field>,<field>&sortOrder=<asc|desc>` : Sort by multiple fields

## Testing the API

You can use Postman to test the API endpoints. Here’s how:

1. Open Postman and create a new request.
2. **Set the Request Type** to `GET`.
3. **Enter the URL**: `http://localhost:3000/`.
4. Add **Query Parameters** for filtering and sorting, if needed.
5. Click **"Send"** to see the response.

## Postman Documentation

For a detailed guide on how to use the API, including examples and additional functionalities, refer to this comprehensive [Postman Documentation](https://www.postman.com/shreshthaaa/workspace/rocketium/collection/33552565-ab9dd148-2cbc-44ec-bd24-656c0742b469?action=share&creator=33552565).


## API Endpoints

### Get Data

- **Endpoint:** `/`
- **Method:** `GET`
- **Query Parameters:**
  - **Filtering:** Filter by any field in the data. For example:
    - `?name=<name>` - Filters by name
    - `?language=<language>` - Filters by language
    - `?name=<name>&language=<language>` - Filters by multiple fields
  - **Sorting:** Sort by one or more fields. For example:
    - `?sortBy=<field>` - Sorts by a particular field
    - `?sortBy=<field>,<field>` - Sorts by multiple fields
    - `?sortBy=<field>,<field>&sortOrder=<asc|desc>` - Sorts by multiple fields and any order

## Example Requests

- Fetch all data:
    ```sh
    GET http://localhost:3000/
    ```

- Filter by `id`:
    ```sh
    GET http://localhost:3000/?id=V59OF92YF627HFY0
    ```

- Filter by `name`:
    ```sh
    GET http://localhost:3000/?name=Adeel
    ```

- Sort by `name` in ascending order:
    ```sh
    GET http://localhost:3000/?sortBy=name&sortOrder=asc
    ```

- Filter by multiple fields and sort:
    ```sh
    GET http://localhost:3000/?name=Adeel&sortBy=name,version&sortOrder=desc
    ```

- Sort by multiple fields:
    ```sh
    GET http://localhost:3000/?sortBy=name,version&sortOrder=asc
    ```

- Filter by a particular `language`:
    ```sh
    GET http://localhost:3000/?language=Sindhi
    ```

- Sort by `version` in ascending order
    ```sh
    GET http://localhost:3000/?sortBy=version&sortOrder=asc
    ```
    

## Contributing 
Feel free to fork the repository and submit pull requests. For any issues or feature requests, please open an issue on the GitHub repository.
