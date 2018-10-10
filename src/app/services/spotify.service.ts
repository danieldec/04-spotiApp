import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
    console.log('servicio de spotify listo para usarse');
  }
  getNewReleases() {
    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQAZ_vKSZDpkDnliok9f1rQYeaJWOlvHYhbsia6A1juF8j1OXlI_n1rdcKCZAV578cSPZLUkgBhdSHXEfMs'
    });
    return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: HEADERS });
    // .subscribe( data => {
    //   window.console.log(data);
    //  });
  }
  getArtista(termino: string) {
    const HEADERS = new HttpHeaders({
      'Authorization': 'Bearer BQAZ_vKSZDpkDnliok9f1rQYeaJWOlvHYhbsia6A1juF8j1OXlI_n1rdcKCZAV578cSPZLUkgBhdSHXEfMs'
    });
    return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=MX&offset=0&limit=15`, { headers: HEADERS });
  }
}
