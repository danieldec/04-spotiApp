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
  loading: boolean;
  constructor(private spotify: SpotifyService) {
    this.loading = true;
    this.spotify.getNewReleases()
    .subscribe( (data: any) => {
      console.log(data);
      this.nuevasCanciones = data;
      this.loading = false;
    });
  }
  ngOnInit() {
  }

}
