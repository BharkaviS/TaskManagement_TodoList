import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TasklistComponent } from './tasklist/tasklist.component';
import { EditTaskComponent } from './edit-task/edit-task.component';


const routes: Routes = [

	{
		path:"",
		component : HomeComponent,
	},
	{
		path:"createTask",
		component : TasklistComponent,
	},
	{
		path:"edit_task",
		component : EditTaskComponent,
	},
	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
