import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'EmployeeDB'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
    } else {
        console.log('Connected to the database.');
    }

    const createTableQuery = `CREATE TABLE IF NOT EXISTS employees (
        id INT NOT NULL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        designation VARCHAR(255) NOT NULL,
        age INT NOT NULL,
        description VARCHAR(255) NOT NULL,
        gender VARCHAR(255) NOT NULL,
        address VARCHAR(255) NOT NULL
    )`;

    db.query(createTableQuery, (error, results) => {
        if (error) {
            console.error('Error creating table: ', error);
            db.end();
            return;
        }
        console.log('Table "employees" created successfully.');
    });
});

app.get('/create', (req, res) => {
    const employeeData = `SELECT * FROM employees`
    db.query(employeeData, (error, results) => {
        if (error) {
            console.error('Error fetching employee data: ', error);
            res.status(500).send('Error fetching employee data');
        } else {
            console.log('Employee data fetched successfully.');
            res.status(200).send(results);
        }
    })
});

app.get('/create/:id', (req, res) => {
    const id = req.params.id;
    console.log('Employee id: ', id);
    const employeeData = `SELECT * FROM employees WHERE id=${id}`
    db.query(employeeData, (error, results) => {
        if (error) {
            console.error('Error fetching employee data: ', error);
            res.status(500).send('Error fetching employee data');
        } else {
            console.log('Employee data fetched successfully.');
            res.status(200).send(results);
        }
    })
});

app.post('/create', (req, res) => {
    console.log('Request body: ', req.body);
    const { name, email, designation, age, gender, address, description } = req.body;
    const employee = {
        name: name,
        email: email,
        designation: designation,
        age: age,
        gender: gender,
        address: address,
        description: description
    };

    const insertQuery = 'INSERT INTO employees SET ?';
    db.query(insertQuery, employee, (error, results) => {
        if (error) {
            console.error('Error inserting employee record: ', error);
            res.status(500).send('Error inserting employee record');
        } else {
            console.log('Employee record inserted successfully.');
            res.status(200).send('Employee record inserted successfully');
        }
    });
});

app.delete('/delete/:id', (req, res) => {
    const { id } = req.params;
    const deleteQuery = `DELETE FROM employees WHERE id=${id}`;
    db.query(deleteQuery, (error, results) => {
        if (error) {
            console.error('Error deleting employee record: ', error);
            res.status(500).send('Error deleting employee record');
        } else {
            console.log('Employee record deleted successfully.');
            res.status(200).send('Employee record deleted successfully');
        }
    });
});

app.put('/update/:id', (req, res) => {
    const { id } = req.params;
    const updateQuery = `UPDATE employees SET ? WHERE id=${id}`;
    db.query(updateQuery, req.body, (error, results) => {
        if (error) {
            console.error('Error updating employee record: ', error);
            res.status(500).send('Error updating employee record');
        } else {
            console.log('Employee record updated successfully.');
            res.status(200).send('Employee record updated successfully');
        }
    });
});

app.listen(3001, () => {
    console.log('Running on port 3001');
});