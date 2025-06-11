import { Routes } from '@angular/router';
import { Arrayex } from './arrayex/arrayex';
import { Product } from './product/product';
import { Apicall } from './apicall/apicall';

export const routes: Routes = [
    {path:'Arrayex',component:Arrayex},
    {path:'Product',component:Product},
    {path:'apicall',component:Apicall}
];

