import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';


export const slideInAnimation =
  trigger('routeAnimations', [
    /*transition('TeamPage => *', [
         query(':enter, :leave',
              style({ position: 'fixed', width: '100%' }),
              { optional: true }),
         group([
              query(':enter',[
                  style({ transform: 'translateX(-100%)' }),
                  animate('0.5s ease-in-out',
                  style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave', [
                  style({ transform:   'translateX(0%)'}),
                  animate('0.5s ease-in-out',
                  style({ transform: 'translateX(100%)' }))
              ], { optional: true }),
         ])
    ]),
    transition('HomePage => *', [
         query(':enter, :leave',
              style({ position: 'fixed',  width: '100%' }),
              { optional: true }),
         group([
              query(':enter', [
                  style({ transform: 'translateX(100%)' }),
                  animate('0.5s ease-in-out',
                  style({ transform: 'translateX(0%)' }))
              ], { optional: true }),
              query(':leave', [
                  style({ transform: 'translateX(0%)' }),
                  animate('0.5s ease-in-out',
                  style({ transform: 'translateX(-100%)' }))
                  ], { optional: true }),
          ])
    ]),*/
    transition('HomePage => TeamPage', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(-100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('TeamPage => HomePage', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('HomePage => InfoPage', [
      query(':enter, :leave',
        style({ position: 'fixed', width: '100%' }),
        { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translateX(-100%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(0%)' }))
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translateX(0%)' }),
          animate('0.5s ease-in-out',
            style({ transform: 'translateX(100%)' }))
        ], { optional: true }),
      ])
    ]),
    transition('InfoPage => HomePage', [
      query(':enter, :leave',
          style({ position: 'fixed', width: '100%' }),
          { optional: true }),
      group([
          query(':enter', [
              style({ transform: 'translateX(100%)' }),
              animate('0.5s ease-in-out',
              style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
              style({ transform: 'translateX(0%)' }),
              animate('0.5s ease-in-out',
              style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
      ])
]),
  ]);
