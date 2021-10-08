import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { PaginationComponent } from './pagination/pagination.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'todo',
    pathMatch:'full'
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'pagination',
    component:PaginationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
