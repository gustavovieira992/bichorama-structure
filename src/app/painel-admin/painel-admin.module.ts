import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PainelAdminRoutingModule } from './painel-admin-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PainelAdminRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class PainelAdminModule {
}