const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREATE TABLE users (
            iduser INTEGER PRIMARY KEY AUTOINCREMENT,
            email TEXT NOT NULL,
            password TEXT NOT NULL,
        )`);
    
        await db.close()
    }
}

initDb.init();