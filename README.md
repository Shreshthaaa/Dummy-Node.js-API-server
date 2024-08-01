# Node.js API Project

## Overview 

This project is a Node.js API server built with Express. It provides endpoints to interact with dummy JSON data, including functionalities for filtering, sorting, and retrieving data.

## Features

- Fetch dummy JSON data
- Filter data by `id` and `name`
- Sort data by specified fields

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. **Clone the Repository**

   ```sh
   git clone https://github.com/Shreshthaaa/Rocketium.git

2. **Navigate to the Project Directory**

    ```sh
    cd your-repo-name

3. **Install Dependencies**

    First, install the project dependencies defined in package.json.

    Then, install express and axios if they are not already listed in package.json.     

    ```sh
    npm install
    npm install express axios

4. **Verify Installation**

    Check that express and axios are listed in your package.json file under dependencies:

    ```sh
    "dependencies": {
        "express": "^x.x.x",
        "axios": "^x.x.x"
    }


## Running the Project Locally

1. **Start the Server**

    The server will run on http://localhost:3000.

    ```sh
    npm start

2. **Access the API**

- GET `/api/data`: Fetch all data
- GET `/api/data?id=<id>`: Filter by id
- GET `/api/data?name=<name>`: Filter by name
- GET `/api/data?sortBy=<field>&sortOrder=<asc|desc>`: Sort by specified field and order

## Testing the API

You can use Postman to test the API endpoints. Here’s how:

1. Open Postman and create a new request.
2. **Set the Request Type** to `GET`.
3. **Enter the URL**: `http://localhost:3000/api/data`.
4. Add **Query Parameters** for filtering and sorting, if needed.
5. Click **"Send"** to see the response.

## Example Requests

- Fetch all data:
    ```sh
    GET http://localhost:3000/

- Filter by `id`:
    ```sh
    GET http://localhost:3000/api/data?id=V59OF92YF627HFY0

- Filter by `name`:
    ```sh
    GET http://localhost:3000/api/data?name=Adeel

- Sort by `name` in ascending order:
    ```sh
    GET http://localhost:3000/api/data?sortBy=name&sortOrder=asc

## Contributing 
Feel free to fork the repository and submit pull requests. For any issues or feature requests, please open an issue on the GitHub repository.

## License
This project is licensed under the MIT License. See the LICENSE file for details.