import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms';


import { ZorroTestRoutes } from './zorro-test.routing';
import { ZorroTestComponent } from './zorro-test.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
      CommonModule, 
      ZorroTestRoutes, 
      TranslateModule, 
      NgZorroAntdModule,
      ReactiveFormsModule,
      FormsModule
    ],
  declarations: [ZorroTestComponent],
})
export class ZorroTestModule {}