const yargs = require("yargs");
const command = process.argv[2];
const fs = require("fs");

const {
    add,
    del,
    list,
    update
} = require("./Utils");
let movieList = [];

try {
    let tempJson = fs.readFileSync('./films.json');
    let tempFilm = JSON.parse(tempJson)
    movieList = tempFilm;

} catch (error) {
    movieList = [];
}

const app = () => {
    if (command === 'add') {
        add(movieList, yargs.argv.movie, yargs.argv.year);
    } else if (command === 'del') {
        del(movieList, yargs.argv.movie, yargs.argv.year);
    } else if (command === 'list') {
        list(movieList);
    } else if (command === 'update') {
        update(movieList, yargs.argv.movie, yargs.argv.year, yargs.argv.movieNew, yargs.argv.yearNew);
    }
};

app();