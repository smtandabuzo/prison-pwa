import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ]
})
export class LoginModule { }
