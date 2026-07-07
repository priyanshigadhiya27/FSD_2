const mg = require('mongoose');

mg.connect('mongodb://127.0.0.1:27017/lec06')
  .then(() => console.log('db connected'))
  .catch(err => console.error(err));

const mgschema = new mg.Schema({
    title: String,
    director: String,
    genre: String,
    rating: Number,
    releaseYear: Number,
    language: String
});

mg.pluralize(null);
const movie = new mg.model('movie', mgschema); // Model variable is 'movie'

const createdata = async () => {
    try {
        const pdata = [
            {title: "3 Idiots", director: "Rajkumar Hirani", genre: "Comedy", rating: 9.2, releaseYear: 2009, language: "Hindi"},
            {title: "KGF Chapter 2", director: "Prashanth Neel", genre: "Action", rating: 8.8, releaseYear: 2022, language: "Kannada"},
            {title: "Dangal", director: "Nitesh Tiwari", genre: "Drama", rating: 8.9, releaseYear: 2016, language: "Hindi"},
            {title: "Baahubali", director: "S. S. Rajamouli", genre: "Action", rating: 8.7, releaseYear: 2015, language: "Telugu"},
            {title: "Jawan", director: "Atlee", genre: "Action", rating: 7.8, releaseYear: 2023, language: "Hindi"},
            {title: "Drishyam", director: "Nishikant Kamat", genre: "Thriller", rating: 8.4, releaseYear: 2015, language: "Hindi"},
            {title: "Pushpa", director: "Sukumar", genre: "Action", rating: 8.1, releaseYear: 2021, language: "Telugu"}
        ];

        // 1. Clear existing data first to prevent duplicate entries on rerun (Optional but recommended)
      

        // 2. Corrected from 'person' to 'movie'
        await movie.insertMany(pdata);
        
        // 3. Corrected from 'person' to 'movie' to fetch filtered list
        const highRatedMovies = await movie.find({ rating: { $gt: 8.5 } });
        
        console.log("Movies with rating > 8.5:");
        console.log(highRatedMovies);
    }
    catch (err) {
        console.log("error msg:", err); // Print the actual error object for easier debugging
    }
    finally {
        mg.connection.close(); // Cleanly close connection when done
    }
};

createdata();
