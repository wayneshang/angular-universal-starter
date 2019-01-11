import { ZorroTestComponent } from './zorro-test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ZorroTestComponent,
    data: {
      meta: {
        title: 'home.title',
        description: 'home.text',
        override: true,
      },
    },
  },
];

export const ZorroTestRoutes = RouterModule.forChild(routes);