import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { SiteRoutingModule } from './site-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        SiteRoutingModule
    ],
    declarations: [HomeComponent]
})
export class SiteModule {
}