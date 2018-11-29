import mysql from 'mysql'
import { mySqlConfig } from '../../config/db/config'

export const database = mysql.createPool(mySqlConfig)

export const queryFromMysql = (sql, values) => {
    return new Promise((resolve, reject) => {
        database.getConnection(function (err, connection) {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}