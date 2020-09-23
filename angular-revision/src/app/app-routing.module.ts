import {NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';

import { TestComponent } from './test/test.component';
import {PostComponent} from './post/post.component';
const routes:Routes = [
    {path:'test',component:TestComponent,data:{parentData:true}},
    {path:'post',component:PostComponent}
];

// @NgModule({
//     imports:[],
//     exports:[RouterModule]
// })

export const  AppRoutingModule = RouterModule.forRoot(routes)
export const RoutingComponents = [TestComponent,PostComponent]