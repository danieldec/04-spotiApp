import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  // paises: any[] = [];
  // constructor(private http: HttpClient) {
  //   this.http.get('https://restcountries.eu/rest/v2/lang/es')
  //   .subscribe( p => {
  //     window.console.log(p);
  //     this.paises = p;
  //   });
  // }
  nuevasCanciones: any[] = [];
  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases()
    .subscribe( data => {
      console.log(data.albums.items);
      this.nuevasCanciones = data.albums.items;
    });
  }
  ngOnInit() {
  }

}
