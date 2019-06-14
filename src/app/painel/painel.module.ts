import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PainelRoutingModule } from './painel-routing.module';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        PainelRoutingModule
    ],
    declarations: [DashboardComponent]
})
export class PainelModule {
}