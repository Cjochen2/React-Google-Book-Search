# React-Google-Book-Search

## Description

This application utilizes the Google-Books-API so that users may query about favorite authors and books. This application currently utilized 2 pages, one for searching and one for viewing saved books. Upon a successful query on the Search page 10 results will display to the page and render 2 buttons. One that allow the user to save particular books of their choosing to the DB. The other takes them to the Google Book store where they can view more detailed information as well as purchase the book. After a book has been saved the user may flip over to the Saved page where they can view all the books they have saved to the database. Here they will have the option to view the book in the google store or remove it from their saved book page.

## Technology

This application is built utilizing the Mern Stack. Below is a more detailed description of the Tech and the intent if there was reason aside from convenience.

   React: I used React as my front end frame work so that I can work more with using Hooks and its functional state management. The other goal was to limit the amount of redundant code to none. One of the tricky parts of this project for me was figuring how to handle 2 similar but different JSON Objects within a single component so that it conditionally rendered. This was done inside of the "BookCard" component
      
   React-Router-Dom
      
   React-Bootstrap: The main goal here was to use solely Bootstrap for styling and responsiveness of the application.
      MongoDB and Mongoose: I picked MongoDB so that I can diversify my experience from MySQL and Sequelize. 
      This was a learning experience and there was a lot of referenceing the documentation for understanding.
      
   Node.js
      
   Express.js
      
   axios
      
   Google API
      
If You have any questions please feel free to reach out. I have more plans for this application such as adding in user functionality like being able create an account to log in with as well as being able to interact with friends and their saved book collection.
