
const models = require('./models');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

let new_album = [];

readline.question('Album name?', (albumName) =>{
    console.log(`Album name is: ${albumName}`);
    new_album['albumName'] = albumName;
    
    readline.question('Album year?', (albumYear) =>{
        console.log(`Album year is: ${albumYear}`);
        new_album['albumYear'] = albumYear;
        require.close();
    });
    
    readline.question('Artist Id?', (artistId) =>{
        console.log(`Artist Id is: ${artistId}`);
        new_album('artistId') = artistId;
    });
    readline.close();
});




models.album.create({albumName: new_album['albumName'], albumYear: new_album['albumYear'], artistId: new_album['artistId']})
.then(function(album){
    console.log(album);
})