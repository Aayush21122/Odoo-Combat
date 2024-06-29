
const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Users',
    password: 'rishabh',
    port: 5432,
});

async function addUser(name, email, password , flag) {
    const client = await pool.connect();
    try {
        const query = 'INSERT INTO users (name, email, password , flag) VALUES ($1, $2, $3 , $4) RETURNING *';
        const values = [name, email, password,flag] ;
        const result = await client.query(query, values);
        console.log('User added successfully:', result.rows[0]);
    } catch (err) {
        console.error('Error adding user:', err);
    } finally {
        client.release();
    }
}
async function updateFlag(email) {
    const client = await pool.connect();
    try {
        const query = 'UPDATE users SET flag = "no" WHERE email = $1 RETURNING *';
        const values = [email];
        const result = await client.query(query, values);
        console.log('Flag updated successfully:', result.rows[0]);
        return result.rows[0];
    } catch (err) {
        console.error('Error updating flag:', err);
        return null;
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
        console.log('User retrieved successfully:', result);
        return result.rows[0]
    } catch (err) {
        console.error('Error fetching user:', err);
        return null;
    } finally {
        client.release();
    }
}

module.exports = { addUser, getUser };
