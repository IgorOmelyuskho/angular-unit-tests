import { TestComponentsComponent } from './components/test-components/test-components.component';
import { TestDirectivesComponent } from './components/test-directives/test-directives.component';
import { TestGuardsComponent } from './components/test-guards/test-guards.component';
import { TestPipesComponent } from './components/test-pipes/test-pipes.component';
import { TestServicesComponent } from './components/test-services/test-services.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: 'components', pathMatch: 'full' },
  { path: 'components', component: TestComponentsComponent },
  { path: 'directives', component: TestDirectivesComponent },
  { path: 'guards', component: TestGuardsComponent },
  { path: 'pipes', component: TestPipesComponent },
  { path: 'services', component: TestServicesComponent },
  { path: '**', redirectTo: 'components' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
