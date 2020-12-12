import { CLIENT_ID, REDIRECT_URI } from './config';
const spotifyEndpoint = 'https://api.spotify.com/v1/';

let accessToken = '';

const Spotify = {
  getAccessToken: () => {
    if (accessToken) 
      return accessToken;

    const accessTokenUrl = window.location.href.match(/access_token=([^&]*)/);
    const expiresInUrl = window.location.href.match(/expires_in=([^&]*)/);

    if (accessTokenUrl && expiresInUrl) {
      accessToken = accessTokenUrl[1];
      const expiresIn = expiresInUrl[1];
      window.setTimeout(() => accessToken = '', expiresIn * 1000);
      window.history.pushState('Access Token', null, '/');
      return accessToken;
    }

    window.location = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&scope=playlist-modify-public&redirect_uri=${REDIRECT_URI}`;
  },

  search: async function (term) {
    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    const response = await fetch(`${spotifyEndpoint}search?type=track&q=${term}`, { headers });
    const json = await response.json();

    if (json.tracks) 
      return json.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri,
        image: track.album.images[2].url
      }));

    return [];
  },

  savePlaylist: async function (name, uris) {
    if (!name || !uris)
      return;
    
    const accessToken = this.getAccessToken();
    const headers = { Authorization: `Bearer ${accessToken}` };
    const userResponse = await fetch(`${spotifyEndpoint}me`, { headers });
    const userId = (await userResponse.json()).id;
    const playlistResponse = await fetch(`${spotifyEndpoint}users/${userId}/playlists`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name })
    });
    const playlistId = (await playlistResponse.json()).id;

    return await fetch(`${spotifyEndpoint}users/${userId}/playlists/${playlistId}/tracks`, {
      method: 'POST',
      headers,
      body: JSON.stringify({ uris })
    });
  }
};

export default Spotify;