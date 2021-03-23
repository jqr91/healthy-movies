import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { PipesCustom } from 'src/app/core/pipes/pipes-custom.module';
import { DashboardComponent } from './dashboard.component';
import { NgbdSortableHeader } from './dashboard.component';
import {ModalComponent} from '../components/modal/modal.component';
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
];

@NgModule({
  declarations: [DashboardComponent, NgbdSortableHeader],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    PipesCustom,
    NgbPaginationModule
  ],
  exports: [RouterModule],
  entryComponents: [ModalComponent]
})
export class DashboardRoutingModule {}
