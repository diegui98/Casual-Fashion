import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  declarations: [NavbarComponent, SidebarComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, SidebarComponent],
})
export class CoreModule {}
