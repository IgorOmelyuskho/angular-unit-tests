import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentsComponent } from './components/test-components/test-components.component';
import { TestDirectivesComponent } from './components/test-directives/test-directives.component';
import { TestPipesComponent } from './components/test-pipes/test-pipes.component';
import { TestGuardsComponent } from './components/test-guards/test-guards.component';
import { TestServicesComponent } from './components/test-services/test-services.component';
import { ReversePipe } from './pipes/reverse.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentsComponent,
    TestDirectivesComponent,
    TestPipesComponent,
    TestGuardsComponent,
    TestServicesComponent,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
