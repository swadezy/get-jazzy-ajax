# Get Jazzy AJAX

- Fork
- Clone
- `npm install` to get all of the dependencies (just `express` for now)

## Base

- The `server.js` file is getting a little crowded. Move arrays into a `modules` folder inside of your `server` folder (names like `artist.js` and `song.js` would be good).
- Look at the pattern for the working `/artist` AJAX request. The client side is all set up for `/song`, but the server side code isn't there. Add the server side code.
- In the comments on the submission write down what you think is happening. Set break point on the client side to help you figure out the order of the code.

## Stretch

The `/artist` and `/song` requests are working! Add a third array for albums that has `title` and `year` for the release date.
