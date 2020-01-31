import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const routes: Routes = [{
  path: '',
  loadChildren: './pages/login/login.module#LoginModule'
},{
  path: 'sidenav',component:SidenavComponent,
  children: [
    {
      path: 'page-one',
      loadChildren: './pages/prisoner-capture/prisoner-capture.module#PrisonerListModule'
     },
     {
       path: 'page-two',
       loadChildren: './pages/court-cases/court-cases.module#CourtCasesModule'
     },
     {
       path: 'page-three',
       loadChildren: './pages/prisoner-transfer/prisoner-transfer.module#PrisonerTransferModule'
     },
    {
      path: 'visitor-page',
      loadChildren: './pages/visitor-information/visitor-information.module#VisitorInformationModule'
    },
    {
      path: 'parole-page',
      loadChildren: './pages/parole-management/parole-management.module#ParoleManagementModule'
    },
    {
      path: 'correctional-programs',
      loadChildren: './pages/correctional-program/correctional-program.module#CorrectionalProgramModule'
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
