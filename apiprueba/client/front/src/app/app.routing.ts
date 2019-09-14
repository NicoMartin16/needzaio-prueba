import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guard/auth.guard';

export const ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'list', component: ListComponent, canActivate: [AuthGuard] },
    { path: 'sign-up', component: SignupComponent },
    { path: 'login', component: LoginComponent },
    { path: '**', pathMatch:'full', redirectTo: 'home' }
];