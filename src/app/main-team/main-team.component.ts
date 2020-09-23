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
    Title: 'Denis',
    SubTitle: 'Kapitan Rimmer',
    PhotoUrl: 'assets/userPic/denis.png',
    Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident'
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
