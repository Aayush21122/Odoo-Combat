// const { Pool } = require('pg')
// const exp = require('express')
// const app = exp()
// pool = new Pool({
//     user: 'postgres',
//     host: 'localhost',
//     database: 'Users',
//     password: 'rishabh',
//     port: 5432,
// })
// // async function sendata() {
// async function addUser(name, email, password) {
//     const client = await pool.connect();
//     try {
//         // SQL query to insert a new user
//         const query = 'INSERT INTO Users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
//         const values = [name, email, password];

//         // Execute the query
//         const result = await client.query(query, values);
//         console.log('User added successfully:', result.rows[0]);
//     } catch (err) {
//         console.error('Error adding user:', err);
//     } finally {
//         client.release(); // Release the client back to the pool
//     }
// }

// async function getUser(email) {
//     const client = await pool.connect();
//     try {
//         const query = `Select * from users where email =${email}`
//         const result = await client.query(query)
//         console.log('Users retrieved successfully:', result.rows);
//         return result.rows;
//     } catch (err) {
//         console.error('Error fetching users:', err);
//         return err;
//     } finally {
//         client.release(); // Release the client back to the pool
//     }
// }


// // }
// module.exports = {addUser, getUser}

const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Users',
    password: 'rishabh',
    port: 5432,
});

async function addUser(name, email, password) {
    const client = await pool.connect();
    try {
        const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *';
        const values = [name, email, password];
        const result = await client.query(query, values);
        console.log('User added successfully:', result.rows[0]);
    } catch (err) {
        console.error('Error adding user:', err);
    } finally {
        client.release();
    }
}

async function getUser(email) {
    const client = await pool.connect();
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);
        console.log('User retrieved successfully:', result.rows[0]);
        return result.rows[0];
    } catch (err) {
        console.error('Error fetching user:', err);
        return null;
    } finally {
        client.release();
    }
}

module.exports = { addUser, getUser };
