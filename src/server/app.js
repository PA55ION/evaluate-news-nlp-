const app = require('../server/index')

const port = process.env.PORT || 8000;
const server = app.listen(port, listening);


function listening() {
    console.log(`running on localhost: ${port}`)
}