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
    PhotoUrl: 'https://scontent.fprg4-1.fna.fbcdn.net/v/t1.0-1/p200x200/36784770_1708016935902834_5510810655608799232_n.jpg?_nc_cat=108&_nc_sid=7206a8&_nc_ohc=OzBADd_smvsAX_mHhh_&_nc_ht=scontent.fprg4-1.fna&tp=6&oh=85204510289c6a1f2e880d579e128ee2&oe=5F914619',
    Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident'
  };
  hulda: User = {
    Title: 'Hulda',
    SubTitle: 'Rimmer',
    PhotoUrl: 'https://scontent.fprg4-1.fna.fbcdn.net/v/t1.0-9/29356515_1740769759277061_3070223093411610624_o.jpg?_nc_cat=107&_nc_sid=09cbfe&_nc_ohc=Vq9_q6TaAoYAX-z3P73&_nc_ht=scontent.fprg4-1.fna&oh=9cd6db92aa62100b84fb508fdd339994&oe=5F92A5FF',
    Content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aliquam erat volutpat. Proin in tellus sit amet nibh dignissim sagittis. Excepteur sint occaecat cupidatat non proident'
  };
  denis: User = {
    Title: 'Denis',
    SubTitle: 'Rimmer',
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
    PhotoUrl: 'https://scontent.fprg4-1.fna.fbcdn.net/v/t1.0-1/p200x200/117223792_3115411278506550_4060365568120457634_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=WZLWcZkS1wkAX_zrkf2&_nc_ht=scontent.fprg4-1.fna&tp=6&oh=176cef8639db1c909a2d8b8fa53cb1d5&oe=5F8FBA3B',
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
