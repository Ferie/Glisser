import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: UserDetailsComponent
    },
    {
        path: '**',
        redirectTo: '/'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
