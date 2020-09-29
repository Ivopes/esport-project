import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';

@Component({
  selector: 'app-main-info',
  templateUrl: './main-info.component.html',
  styleUrls: ['./main-info.component.scss']
})
export class MainInfoComponent implements OnInit {

  lahev: User = {
    Title: 'Profi lahev',
    SubTitle: 'Uhasí touhu po výhře',
    PhotoUrl: 'assets/merch/lahev_merch.png',
    Content: 'Profi Esport lahev pro pravé hráče. Nezapomínej na pitný režim!!!'
  };
  mikina: User = {
    Title: 'Profi mikina',
    SubTitle: 'Zahřeje tě',
    PhotoUrl: 'assets/merch/cervena_mikina_merch.png',
    Content: 'Stylová červená mikina s tvým oblíbeným týmem - naším!!!'
  };
  sede: User = {
    Title: 'Profi šedé tričko',
    SubTitle: 'Obleč se stylově',
    PhotoUrl: 'assets/merch/sede_triko_merch.jpg',
    Content: 'Stylové šedé tričko s tvým oblíbeným týmem - naším!!!'
  };
  modre: User = {
    Title: 'Profi modré tričko',
    SubTitle: 'Obleč se stylově',
    PhotoUrl: 'assets/merch/svetle_modre_triko_merch.jpg',
    Content: 'Stylová modré mikina s tvým oblíbeným týmem - naším!!!'
  };
  cepice: User = {
    Title: 'Profi kšiltovka',
    SubTitle: 'Kryje před headshotem',
    PhotoUrl: 'assets/merch/ksiltovka_merch.png',
    Content: 'Stylová kšiltovka s tvým oblíbeným týmem - naším!!! S touhle ti headshot jenom tak nedají...'
  };
  rouska: User = {
    Title: 'Profi rouška',
    SubTitle: 'Nebuď toxic',
    PhotoUrl: 'assets/merch/rouska_merch.png',
    Content: 'Nemůže tě otrávit toxic komunita, když máš roušku přímo od nás!!!'
  };

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  toMenu(): void{
    this.router.navigate(['/']);
  }
}
