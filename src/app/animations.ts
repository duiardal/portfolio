import {
   transition,
   trigger,
   query,
   style,
   animate,
   group,
   animateChild
} from '@angular/animations';
export const slideInAnimation =
   trigger('routeAnimations', [
        transition('* => *', [     
             group([
                  query(':enter',[
                      style({  opacity: 0 }),
                  ], { optional: true }),
                  query(':leave', [
                      style({ opacity: 1 }),
                      animate('0.3s ease-in-out', 
                      style({ opacity: 0 }))
                  ], { optional: true }),
                  query(':enter', [
                      style({ opacity: 0 }),
                      animate('0.3s ease-in-out', 
                      style({ opacity: 1 }))
                  ], { optional: true }),
             ])
        ])
]);