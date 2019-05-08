import { WelcomeComponent } from './welcome.component';


import { Routes } from '@angular/router';
import { ResourceNotFoundComponent } from './nofound.component';


export const appRoutes: Routes =[


    {path:"home",component:WelcomeComponent},
    {path:"",component:WelcomeComponent},
    {path:"**",component:ResourceNotFoundComponent}
];
    
