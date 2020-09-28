import { trigger, transition, style, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/user';


@Component({
  selector: 'app-main-team',
  templateUrl: './main-team.component.html',
  styleUrls: ['./main-team.component.scss'],
  animations: [
    trigger('myInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('100ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('100ms', style({ opacity: 0 }))
      ])
    ]),
  ]
})
export class MainTeamComponent implements OnInit {

  ivo: User = {
    Title: 'Ivo',
    SubTitle: 'Rimmer',
    PhotoUrl: 'assets/userPic/ivo.png',
    Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident'
  };
  hulda: User = {
    Title: 'Hulda',
    SubTitle: 'Rimmer',
    PhotoUrl: 'assets/userPic/hulda.png',
    Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident'
  };
  denis: User = {
    Title: 'Denis Lokaj',
    SubTitle: 'DeniGOD',
    PhotoUrl: 'assets/userPic/denis.png',
    Content: 'Narozen 24.7.1998 ve Frýdku-Místku. Jako malého mě počítačové hry fascinovaly a rád jsem hraním trávil svůj volný čas, v této době jsem ale ještě netušil, že právě tyhle hry ve mně později vzbudí zvídavost v informačních technologiích, ať už se jedná o hardware nebo software. Nyní jsem už dospělý a volný čas trávím především jinak, hry nejsou moje každodenní náplň a z velké části mě omrzely, ale zájem o technologii „pod pokličkou“ vzkvétá. Ve svém volném čase rád posedím s přáteli, rekreačně sportuju, lyže, kolo, plavání, cvičení. Občas si přečtu knihu na téma, které mě momentálně zajímá, poslouchám hudbu a když je chuť, tak i sem tam něco poživatelného uvařím.'
  };
  jirka: User = {
    Title: 'Jirka',
    SubTitle: 'Rimmer',
    PhotoUrl: 'assets/userPic/Jirka.jpg',
    Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proidentem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proidentem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proidentem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident'
  };
  kominek: User = {
    Title: 'Pan Kominek',
    SubTitle: 'Rimmer',
    PhotoUrl: 'assets/userPic/kominek.png',
    Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident'
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
