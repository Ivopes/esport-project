import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation } from './shared/animations';
import {moveFromBottom, moveFromLeft, moveFromRight, moveFromTop} from 'ngx-router-animations';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('moveFromLeft',  [ transition('HomePage => InfoPage', useAnimation(moveFromLeft)),
                               transition('TeamPage => HomePage', useAnimation(moveFromLeft))]),
    trigger('moveFromRight',  [ transition('InfoPage => HomePage', useAnimation(moveFromRight)),
                                transition('HomePage => TeamPage', useAnimation(moveFromRight))]),
    trigger('moveFromBottom',  [ transition('HomePage => ContactPage', useAnimation(moveFromBottom))]),
    trigger('moveFromTop',  [ transition('ContactPage => HomePage', useAnimation(moveFromTop))]),

    ]
})
export class AppComponent {
  //title = 'esport-project';

  prepareRoute(outlet: RouterOutlet): any {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  getState(outlet): any {
    return outlet.activatedRouteData.state;
  }
}
