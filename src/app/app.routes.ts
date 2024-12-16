import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [{
    path:'products',
    component:ProductListComponent,
   
},
{
    path:'',
    component:LoginComponent
}

];
