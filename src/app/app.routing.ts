import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core'
import {GuideComponent} from './components/pages/guide/guide.component';
import { RecordsComponent } from 'app/components/pages/records/records.component';


export const appRoutes: Routes = [
  { path: 'guide', component: GuideComponent,
    children: [
      { path: 'guidelines', component: GuideComponent},
      { path: 'instructions', component: GuideComponent},
      { path: 'user-stories', component: GuideComponent},
      { path: 'thought-process', component: GuideComponent},
      { path: 'resources', component: GuideComponent},
      { path: '**',
        redirectTo: 'guidelines',
        pathMatch: 'full'
      }
      ]
  },
  {path:'records',
    component: RecordsComponent},
  { path: '**',
    redirectTo: '/guide',
    pathMatch: 'full'
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
