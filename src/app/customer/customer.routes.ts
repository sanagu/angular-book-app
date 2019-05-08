import { CustomerRegistrationComponent } from './customer-registration.component';
import { CustomerLoginComponent } from './customer-login.component';
import { Routes } from '@angular/router';


export const customerRoutes:Routes=[
    {path:"signup",component:CustomerRegistrationComponent},
    {path:"login",component:CustomerLoginComponent}
]