
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
