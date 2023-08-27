import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { UserOneComponent } from './user-one/user-one.component';
import { UserTwoComponent } from './user-two/user-two.component';


@NgModule({
  declarations: [
    UsersComponent,
    UserOneComponent,
    UserTwoComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
