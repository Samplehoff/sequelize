const models = require('./models');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

let new_album = [];

readline.question(`Album name?`, (albumName) => {
  console.log(`album name is: ${albumName}`);
  new_album['name'] = albumName;

  readline.question(`Album year?`, (albumYear) => {
    console.log(`album year is: ${albumYear}`);
    new_album['year'] = albumYear;

    readline.question(`Artist ID?`, (artistId) => {
      console.log(`Artist ID is: ${artistId}`);
      new_album['artist_id'] = artistId;

      models.albumName.create({ albumName: new_album['name'], albumYear: new_album['year'], artistId: new_album['artist_id'] })
        .then(function (albumName) {
          console.log(albumName);
        });
      readline.close();
    });
  });
});




