import { CLIENT_ID, REDIRECT_URI } from './config';
const searchEndpoint = `https://api.spotify.com/v1/search?`;

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
    const response = await fetch(`${searchEndpoint}type=track&q=${term}`, { headers });
    const json = await response.json();

    if (json.tracks) 
      return json.tracks.items.map(track => ({
        id: track.id,
        name: track.name,
        artist: track.artists[0].name,
        album: track.album.name,
        uri: track.uri
      }));

    return [];
  }
};

export default Spotify;