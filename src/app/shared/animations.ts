import { trigger, transition, style, query, animateChild, group, animate } from '@angular/animations';

/*export const slideInAnimation =
  trigger('routeAnimations', [
    transition('TeamPage => HomePage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('3000ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('3000ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('HomePage => TeamPage', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('3000ms ease-out', style({ left: '-100%' }))
        ]),
        query(':enter', [
          animate('3000ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> seam', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%' }))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
*/
export const slideInAnimation =
   trigger('routeAnimations', [
        transition('TeamPage => *', [
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
        ]),
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
]);
