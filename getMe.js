const fs = require('fs')
const SpotifyWebApi = require('spotify-web-api-node');
const token = "BQBVG9xjl7DHAG2xGOIMgBp7kJBJQQUwj59DPMFWYn44Y6T4ZEcwL6q_fQ1QgCpmR6k2DTCy7Iv-p3-Q21SWNHllUMOCQQ5G5pE1NQEcpkzkNSzbMefduQZWXCbWlRkIGBUKvZCIgKID6rsXk_ORokMAw8CMh2AuXu5hcw7hj5qXpz82nOX0qEFw9Orr2E9Uhqc9hW9GDMNaPv-X9j0TC_z57oNShy3mNdN-xW9ZCgCDVQ0VNvwfjeYqeAaEjZYfBMDBgwHIK-3th6A6M5D-ZAjLfNuFv_pRszIwmYFuAM2InoJQyG4k_BXAWO8eBqq_8-V4zt5oo9br9I-fnwhMaQQO";

const spotifyApi = new SpotifyWebApi();
spotifyApi.setAccessToken(token);

//GET MY PROFILE DATA
function getMyData() {
  (async () => {
    const me = await spotifyApi.getMe();
    console.log(me.body);
    // getUserPlaylists(me.body.id);
  })().catch(e => {
    console.error(e);
  });
}

//GET MY PLAYLISTS
// async function getUserPlaylists(userName) {
//   const data = await spotifyApi.getUserPlaylists(userName)

//   console.log("---------------+++++++++++++++++++++++++")
//   let playlists = []

//   for (let playlist of data.body.items) {
//     console.log(playlist.name + " " + playlist.id)
    
//     let tracks = await getPlaylistTracks(playlist.id, playlist.name);
//     // console.log(tracks);

//     const tracksJSON = { tracks }
//     let data = JSON.stringify(tracksJSON);
//     fs.writeFileSync(playlist.name+'.json', data);
//   }
// }

// //GET SONGS FROM PLAYLIST
// async function getPlaylistTracks(playlistId, playlistName) {

//   const data = await spotifyApi.getPlaylistTracks(playlistId, {
//     offset: 1,
//     limit: 100,
//     fields: 'items'
//   })

//   // console.log('The playlist contains these tracks', data.body);
//   // console.log('The playlist contains these tracks: ', data.body.items[0].track);
//   // console.log("'" + playlistName + "'" + ' contains these tracks:');
//   let tracks = [];

//   for (let track_obj of data.body.items) {
//     const track = track_obj.track
//     tracks.push(track);
//     console.log(track.name + " : " + track.artists[0].name)
//   }
  
//   console.log("---------------+++++++++++++++++++++++++")
//   return tracks;
// }

getMyData();