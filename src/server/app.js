const app = require('../server/index')

app.listen(process.env.PORT || 8000 function() {
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
})