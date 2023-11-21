
![Screenshot from 2023-06-10 13-48-30](https://github.com/Dev-Abu/BLOG-WEtalk-Daynamic_Project/assets/111322652/bb394a2a-933c-463b-a486-01f42659382c)
# BLOG-WEtalk-Dynamic_Project
- ( Still in development  mode ) This is  a social blog web application.
- The services are. Users can log in and can create a post.
- Users can create  posts, likes, dislikes, comments, save bookmarks, etc.
- { The tools are Javascript  Node js Express with Mongo DB database }  


## To run this application provide your database details.
  Create a dotenv file on the root then provide database connection details.:
  1. DB_ADMIN = YOUR_DB_USERNAME:
  2. DB_PASSWORD = YOUR_DB_PASSWORD:
  3. DB_SECRET = YOUR_SECRET_KEY:

 - And set Mongodb database uri on /root app.js 
 - And on root/middleware/middleware.js, to access user authentication session cookies.

### Run this Application live on the browser.

### Installation

Navigate to the root directory 
Install the project dependencies:

```bash
npm install
```

### Running the App

To start the development server:

```bash
npm start
```

The app will be running at `http://localhost:9090` in your browser.
