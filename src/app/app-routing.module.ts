import { AuthenticationGuard } from './guards/authentication.guard';
import { AuthComponent } from "./components/auth/auth.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full"
  },
  {
    path: "login",
    component: AuthComponent
  },
  {
    path: 'products',
    loadChildren: './components/products/products.module#ProductsModule',
    canActivate: [AuthenticationGuard],
    canLoad: [AuthenticationGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
