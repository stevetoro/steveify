import { CLIENT_ID, REDIRECT_URI } from './config';

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
  }
};

export default Spotify;