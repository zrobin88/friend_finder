const express = require("express");


const app = express();
const PORT = process.env.PORT || 3000;
 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require("./app/routing/apiRoutes")(app); 
require("./app/routing/htmlRoutes")(app);


  // Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT)
});

