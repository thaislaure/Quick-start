import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const appRouttes: Routes = [
{
    path:'',
    redirectTo: '/contato',
    pathMatch: 'full'
}
]

@NgModule({
imports: [
    RouterModule.forRoot(appRouttes)
    ],
    exports : [
    RouterModule
    ]
})
export class AppRoutingModule{}