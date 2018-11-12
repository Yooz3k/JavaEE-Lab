import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './components/app/app.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {ListDriversComponent} from './components/list-drivers/list-drivers.component';
import {ListResultsComponent} from './components/list-results/list-results.component';
import {EditDriverComponent} from './components/edit-driver/edit-driver.component';
import {EditResultComponent} from './components/edit-result/edit-result.component';
import {ViewDriverComponent} from './components/view-driver/view-driver.component';
import {ViewResultComponent} from './components/view-result/view-result.component';
import {EditCircuitComponent} from './components/edit-circuit/edit-circuit.component';
import {ViewCircuitComponent} from './components/view-circuit/view-circuit.component';
import {ListCircuitsComponent} from './components/list-circuits/list-circuits.component';
import {ResultsService} from "./services/results.service";


@NgModule({
  declarations: [
    AppComponent,
    ListDriversComponent,
    ListResultsComponent,
    EditDriverComponent,
    EditResultComponent,
    ViewDriverComponent,
    ViewResultComponent,
    EditCircuitComponent,
    ViewCircuitComponent,
    ListCircuitsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,

    AppRoutingModule
  ],
  providers: [ResultsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
