import {ModuleWithProviders} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NewProjectComponent } from './components/new-project/new-project.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { EditComponent } from './components/edit/edit.component';

const appRoutes: Routes=[
    {path:'', component:HomeComponent},
    {path:'About', component:AboutComponent},
    {path:'Projects', component:ProjectsComponent},
    {path:'New-Project', component:NewProjectComponent},
    {path:'Contact', component:ContactComponent},
    {path:'Projects/Project/:id', component:DetailsComponent},
    {path:'Projects/Project/Edit/:id', component: EditComponent},
    {path:'**', component:Error404Component}
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);