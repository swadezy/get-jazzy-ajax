const express = require('express');
const artists = require('./modules/artists.js');
const songs = require('./modules/songs.js');
const albums = require('./modules/albums.js')

const app = express();
const PORT = 5000;

// const artistListArray = [
//     {
//         name: 'Miles Davis',
//         born: 1926,
//         died: 1990,
//     },
//     {
//         name: 'Duke Ellington',
//         born: 1899,
//         died: 1974,
//     },
//     {
//         name: 'John Coltrane',
//         born: 1926,
//         died: 1987,
//     },
//     {
//         name: 'Louis Daniel Armstrong',
//         born: 1901,
//         died: 1971,
//     },
// ];

// const songListArray = [
//     {
//         title: 'Take Five',
//         artist: 'The Dave Brubeck Quartet',
//     },
//     {
//         title: 'So What',
//         artist: 'Miles Davis',
//     },
//     {
//         title: 'Sing Sing Sing',
//         artist: 'Benny Goodman',
//     },
//     {
//         title: 'Take the "A" Train',
//         artist: 'The Dave Brubeck Quartet',
//     },
// ];

app.use(express.static('server/public'));

app.get('/artist', (req, res) => {
// if a request is received from client at '/artist'
    res.send(artists);
// send artistListArray to the client from server
});

// TODO - Add GET for songs

app.get('/song', (req, res) => {
    // if a req is received from client at '/song'
    res.send(songs);
    // send songListArray to the client from server
});

app.get('/album', (req, res) => {
    // if a req is received from client at '/album'
    res.send(albums);
    // send albums to the client from server
})

app.listen(PORT, () => {
    console.log('listening on port', PORT)
});