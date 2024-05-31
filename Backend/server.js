const express = require('express');
const snowflake = require('snowflake-sdk');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());

const connectionOptions = {
    account: 'nhsglnu-cp39630',
    username: 'C_SDK_USR',
    password: '64Squares!@#1',
    warehouse: 'B2D_WH',
    database: 'C_SDK_DB',
    schema: 'PUBLIC',
};
const connection = snowflake.createConnection(connectionOptions);

app.use(express.json());

app.post('/snowflake', async (req, res) => {
    try {
        const data = req.body;
        console.log("data");
        connection.connectAsync(async (err, conn) => {
            if (err) {
                console.error('Error connecting to Snowflake:', err.message);
                res.status(500).send('Error connecting to Snowflake');
                return;
            }
            const useWarehouseSQL = `USE WAREHOUSE ${connectionOptions.warehouse}`;
            conn.execute({
                sqlText: useWarehouseSQL,
                complete: async (err, stmt) => {
                    if (err) {
                        console.error('Error setting active warehouse:', err.message);
                        res.status(500).send('Error setting active warehouse');
                        return;
                    }
                    var sql, params;
                    if (data.TABLENAME === 'TAB_C_SDK') {
                        sql = `INSERT INTO TAB_C_SDK (NUMERIC1, NUMERIC2, NUMERIC3, STRING1, STRING2, STRING3, DATETIME1, DATETIME2) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
                        params = [data.NUMERIC1, data.NUMERIC2, data.NUMERIC3, data.STRING1, data.STRING2, data.STRING3, data.DATETIME1, data.DATETIME2];
                    }
                    if (data.TABLENAME === 'TAB_C_SDK_ORDERS') {
                        sql = `INSERT INTO TAB_C_SDK_ORDERS (ORDER_ID, ORDER_DATE, ORDER_PRIORITY, ITEM_TYPE, SALES_CHANNEL, UNIT_PRICE) VALUES (?, ?, ?, ?, ?, ?)`;
                        params = [data.ORDER_ID, data.ORDER_DATE, data.ORDER_PRIORITY, data.ITEM_TYPE, data.SALES_CHANNEL, data.UNIT_PRICE];
                    }
                    if (data.TABLENAME === 'TAB_C_SDK_REGION') {
                        sql = `INSERT INTO TAB_C_SDK_REGION (REGION, COUNTRY, POPULATION) VALUES (?, ?, ?)`;
                        params = [data.REGION, data.COUNTRY, data.POPULATION];
                    }
                    conn.execute({
                        sqlText: sql,
                        binds: params,
                        complete: (err, stmt, rows) => {
                            if (err) {
                                console.error('Error executing SQL statement:', err.message);
                                res.status(500).send('Error executing SQL statement');
                            } else {
                                console.log('Data inserted successfully!');
                                res.status(200).send('Data inserted successfully');
                            }
                            conn.destroy((err) => {
                                if (err) {
                                    console.error('Error closing Snowflake connection:', err.message);
                                }
                            });
                        },
                    });
                },
            });
        });
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).send('Internal server error');
    }
});

app.put('/snowflake', async (req, res) => {
    try {
        const data = req.body;
        console.log("data", data);
        connection.connectAsync(async (err, conn) => {
            if (err) {
                console.error('Error connecting to Snowflake:', err.message);
                res.status(500).send('Error connecting to Snowflake');
                return;
            }
            const useWarehouseSQL = `USE WAREHOUSE ${connectionOptions.warehouse}`;
            conn.execute({
                sqlText: useWarehouseSQL,
                complete: async (err, stmt) => {
                    if (err) {
                        console.error('Error setting active warehouse:', err.message);
                        res.status(500).send('Error setting active warehouse');
                        return;
                    }
                    let sql;
                    let params;
                    if (data.TABLENAME === 'TAB_C_SDK' || data.TABLENAME === 'TAB_C_SDK_ORDERS') {
                        sql = `UPDATE ${data.TABLENAME} SET `;
                        const fieldsToUpdate = Object.keys(data).filter(key => key !== 'TABLENAME' && key != 'ID');
                        params = fieldsToUpdate.map(field => data[field]);
                        sql += fieldsToUpdate.map(field => `${field} = ?`).join(', ');
                        sql += ` WHERE ID = ?`;
                        params.push(data.ID);
                    } else {
                        sql = `UPDATE ${data.TABLENAME} SET `;
                        const fieldsToUpdate = Object.keys(data).filter(key => key !== 'TABLENAME' && key !== 'ID');
                        params = fieldsToUpdate.map(field => data[field]);
                        sql += fieldsToUpdate.map(field => `${field} = ?`).join(', ');
                        sql += ` WHERE ID = ?`;
                        params.push(data.ID);
                    }
                    console.log({ sql, params });
                    conn.execute({
                        sqlText: sql,
                        binds: params,
                        complete: (err, stmt, rows) => {
                            if (err) {
                                console.error('Error executing SQL statement:', err.message);
                                res.status(500).send('Error executing SQL statement');
                            } else {
                                console.log('Data updated successfully!');
                                res.status(200).send('Data updated successfully');
                            }
                            conn.destroy((err) => {
                                if (err) {
                                    console.error('Error closing Snowflake connection:', err.message);
                                }
                            });
                        },
                    });
                },
            });
        });
    } catch (error) {
        console.error('Error handling request:', error);
        res.status(500).send('Internal server error');
    }
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});




