import { NgModule } from '@angular/core';
import { NgUiLibComponent } from './ng-ui-lib.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  imports: [
  ],
  declarations: [
    NgUiLibComponent,
    ButtonComponent
  ],
  exports: [
    NgUiLibComponent,
    ButtonComponent
  ]
})
export class NgUiLibModule { }
