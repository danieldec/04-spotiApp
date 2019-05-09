import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('servicio de spotify listo para usarse');
  }

  getQuery( query: string ) {
    const URL = `https://api.spotify.com/v1/${query}`;
    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQDLG5e2Hx5trRAe9qKfRfxVM5WwB586vr78sLign6UlVB2YwWHJ1F7q8IwYqJlB2sUJZ-NH4vbwe2Jdz5w'
    });
    return this.http.get(URL, { headers: HEADERS });
  }

  getNewReleases() {
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ) );
  }
  getArtistas(termino: string) {
    return this.getQuery( `search?query=${ termino }&type=artist&offset=0&limit=15` )
    .pipe( map ( data => data['artists'].items) );
  }

  getArtista(id: string) {
    return this.getQuery( `artists/${id}` );
  }
  getTopTracks(id: string) {
    return this.getQuery( `artists/${id}/top-tracks?country=us` )
    .pipe( map ( data => data['tracks']) );
  }
}
