import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component';
import * as CryptoJS from 'crypto-js';
import { environment } from '../../../environment/environment.prod';
import { CharactersComponent } from '../../components/characters/characters.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [HeaderComponent, CharactersComponent],
  providers: [],
})
export class HomeComponent implements OnInit {
  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    const timestamp = new Date().getTime();
    const privateKey = environment.MARVEL_PRIVATE_API;
    const publicKey = environment.MARVEL_PUBLIC_API;
    const stringToHash = timestamp + privateKey + publicKey;
    const hash = CryptoJS.MD5(stringToHash).toString(CryptoJS.enc.Hex);
    // this.httpClient
    //   .get(
    //     `${environment.API}/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`
    //   )
    //   .subscribe(console.log);
  }
}
