import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {EditDriverComponent} from "./components/edit-driver/edit-driver.component";
import {EditResultComponent} from "./components/edit-result/edit-result.component";
import {ListDriversComponent} from "./components/list-drivers/list-drivers.component";
import {ListResultsComponent} from "./components/list-results/list-results.component";
import {ViewDriverComponent} from "./components/view-driver/view-driver.component";
import {ViewResultComponent} from "./components/view-result/view-result.component";
import {ListCircuitsComponent} from "./components/list-circuits/list-circuits.component";
import {EditCircuitComponent} from "./components/edit-circuit/edit-circuit.component";
import {ViewCircuitComponent} from "./components/view-circuit/view-circuit.component";

const routes: Routes = [
  {path: 'results', component: ListResultsComponent},
  {path: 'results/new', component: EditResultComponent},
  {path: 'results/:id/edit', component: EditResultComponent},
  {path: 'results/:id', component: ViewResultComponent},
  {path: 'drivers', component: ListDriversComponent},
  {path: 'drivers/new', component: EditDriverComponent},
  {path: 'drivers/:id/edit', component: EditDriverComponent},
  {path: 'drivers/:id', component: ViewDriverComponent},
  {path: 'circuits', component: ListCircuitsComponent},
  {path: 'circuits/new', component: EditCircuitComponent},
  {path: 'circuits/:id/edit', component: EditCircuitComponent},
  {path: 'circuits/:id', component: ViewCircuitComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
