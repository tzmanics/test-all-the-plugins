import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./home/home.module").then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import("./about/about.module").then(m => m.AboutModule)
  },
  {
    path: "blog",
    loadChildren: () => import("./blog/blog.module").then(m => m.BlogModule)
  },
  {
    path: "svgeez",
    loadChildren: () =>
      import("./svgeez/svgeez.module").then(m => m.SvgeezModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
