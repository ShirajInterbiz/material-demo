import { NgModule } from '@angular/core';
import { MatSlideToggleModule  } from '@angular/material/slide-toggle';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  MatSlideToggleModule, MatButtonModule, MatBadgeModule, MatButtonToggleModule, MatIconModule, MatProgressSpinnerModule, MatToolbarModule,
  MatSidenavModule, MatCardModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
