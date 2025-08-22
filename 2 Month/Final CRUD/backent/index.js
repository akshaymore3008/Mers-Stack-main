// const express = require("express");

// const bodyParser = require("body-parser");
// const cors = require("cors");
// const userRoutes = require('./routes/user.routes');
// const connectMongoDb = require('./config/db');

// const app = express();
// const PORT = 8080;

// connectMongoDb();
// app.use(cors());
// app.use(express.json);
// app.use(bodyParser.json());

// app.use('/api', userRoutes);

// app.listen(PORT, () => {
//     console.log(`Server running at http://localhost:${PORT}`);
// });


const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectMongoDb = require("./config/db");
const userRoutes = require("./routes/user.routes")



const app = express();
const PORT = 8080

connectMongoDb()

app.use(cors())
app.use(bodyParser.json());



app.use('/api' , userRoutes)

app.listen(PORT , () => {
    console.log(`Server is runing on http://localhost:${PORT}`)
})