const sqlite3 = require("sqlite3");
const { open } = require("sqlite");

module.exports = () => 
    open({
        filename: './server/db/login_page',
        driver: sqlite3.Database,
    });