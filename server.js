var   express                 = require('express'),
      mongoose                = require('mongoose');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');

const app = express();
    
//DB Config
const db = require('./config/keys').mongoURI;

//Connect to mongo db 
mongoose.connect(db)
        .then(() => console.log("MongoDB Connected"))
        .catch(err => console.log(err));





//Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile); 
app.use('/api/posts', posts);        


const port = process.env.PORT || 3015;
app.listen(port, function() {
  console.log("jpaulino app is running at localhost:" + port)
});
