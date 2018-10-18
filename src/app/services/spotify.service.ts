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
      'Authorization': 'Bearer BQCQsu2yq6HSCYKEwEV3qEWq9IXHUvKooeRLCZDLADttGBUlqLqgRtxHvcDHLfzXtOiBrrJ7AIYkeOzDDiY1kCALDR4n8sR-_p57-h9ZQNxTto5iYUERgMfpiojg0jj_qCPOp5NUaWSYeUoP6kHT6N034glk6mrwiJqSbA'
    });
    return this.http.get(URL, { headers: HEADERS });
  }

  getNewReleases() {
    // const HEADERS = new HttpHeaders({
    //   'Authorization': 'Bearer BQCAnxJE0NTlU60nY-D4v_8cdfJ5n5s3NE7mpGA07BcvCNXrBn6fMz4AquNRgjf9TCnKM4gxEG7Rk4EtHALOA6tBgHN9iKSQn81az8GJdnlAzl_gsSb3xcSFtNGeEIenFNfKlpHOQw0ymWZqtaWEE99uPUKVqigxQbtirg'
    // });
    return this.getQuery('browse/new-releases?limit=20').pipe( map( data => data['albums'].items ) );
    // this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers: HEADERS }).pipe( map( data => data['albums'].items ) );
    // .subscribe( data => {
    //   window.console.log(data);
    //  });
  }
  getArtista(termino: string) {
    // const HEADERS = new HttpHeaders({
    //   'Authorization': 'Bearer BQCAnxJE0NTlU60nY-D4v_8cdfJ5n5s3NE7mpGA07BcvCNXrBn6fMz4AquNRgjf9TCnKM4gxEG7Rk4EtHALOA6tBgHN9iKSQn81az8GJdnlAzl_gsSb3xcSFtNGeEIenFNfKlpHOQw0ymWZqtaWEE99uPUKVqigxQbtirg'
    // });
    return this.getQuery( `search?query=${ termino }&type=artist&market=MX&offset=0&limit=15` )
    .pipe( map ( data => data['artists'].items) );
    // return this.http.get(`https://api.spotify.com/v1/search?query=${ termino }&type=artist&market=MX&offset=0&limit=15`, { headers: HEADERS })
    // .pipe( map ( data => data['artists'].items) );
  }
}
