// console.log(yargs.argv.movie);

// const add = () => {
//     if(command === "add") {
//         const entry = {title: yargs.argv.movie, actor: yargs.argv.actor}
//         console.log(entry);
//     }
// };

// add ();

  
const fs = require('fs');

exports.add = (movieList, movie, year) => {
        tempMovie = {title: movie, year: year};

        movieList.push(tempMovie);
        let stringMovieList = JSON.stringify(movieList.flat(1));
        fs.writeFileSync('./films.json', stringMovieList);
        console.log(movieList)
};

exports.del = (movieList, entryTitle, entryYear) => {

        let deleteIndex;
        movieList.map((movie, index) => {
            if (movie.title === entryTitle && movie.year === entryYear) {
                deleteIndex = index;
            }
        });
        if (deleteIndex !== undefined) {
            movieList.splice(deleteIndex, 1);
            let stringMovieList = JSON.stringify(movieList.flat(1));
            fs.writeFileSync('./films.json', stringMovieList);
            console.log(movieList)
        }
};


exports.list = (movieList) => {
    console.log(movieList);
};

exports.update = (movieList, entryTitle, entryYear, newTitle, newYear) => {
        let updateIndex;
        movieList.map((movie, index) => {
            if (movie.title === entryTitle && movie.year === entryYear) {
                updateIndex = index;
            }
        });
        if (updateIndex !== undefined) {
            movieList[updateIndex] = {title: newTitle, year: newYear};
            let stringMovieList = JSON.stringify(movieList);
            fs.writeFileSync('./films.json', stringMovieList);
            console.log(movieList)
        }
};