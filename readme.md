# BitSpace

<h3>This project is a replica of an Ecommerce website as the final project of the coding bootcamp from Digital House that was created using JavaScript,Node, Express, EJS, CSS, MySQL for the database and Sequelize as the ORM.</h3>

# 🚀 Technologies

- EJS
- CSS
- Javascript
- Node
- Express
- MySQL
- Sequelize

# Prerequisites

Before running this project, you need to ensure that you have the following software installed on your machine:

- Node.js
- MySQL/workbench

# Installation

Clone the repository to your local machine using the following command:

- git clone https://github.com/BpCampos/Bitspace

Install the project's dependencies by running the following command in the project directory:

- npm install

Create a .env file in the root of the project and add the following variables:

- DB_USERNAME=your_mysql_username
- DB_PASSWORD=your_mysql_password
- DB_DATABASE=db_pi_3
- DB_HOST=127.0.0.1
- DB_DIALECT=mysql
- DB_PORT=3306

Replace <strong>your_mysql_username</strong> and <strong>your_mysql_password</strong> with your MySQL username and password, respectively.

Run the following command in the project directory to migrate the database:

- npx sequelize db:migrate

This will create the necessary tables in the ecommerce_replica database.

Run the following command in the project directory to seed the database with sample data:

- npx sequelize db:seed:al

This will populate the tables with sample data.

# Usage

To start the server, run the following command in the project directory:

- npm run dev

This will start the server on http://localhost:4000. You can access the website by opening this URL in your web browser.

# Contributing

If you find any issues or have any suggestions for improvements, feel free to open an issue or submit a pull request.
