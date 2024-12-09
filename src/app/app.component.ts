import { Component, NgModule } from '@angular/core';

import { ProductListComponent } from './product-list/product-list.component';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  imports: [ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'frontend-app';
}
