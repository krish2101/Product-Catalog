import { Routes, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ProductComponent } from './shared/product/product.component';
import { HomeComponent } from './shared/home/home.component';
import { CreateratecardComponent } from './shared/createratecard/createratecard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'parent', component: ParentComponent },
    { path: 'product', component: ProductComponent },
    { path: 'createratecard', component: CreateratecardComponent }
]