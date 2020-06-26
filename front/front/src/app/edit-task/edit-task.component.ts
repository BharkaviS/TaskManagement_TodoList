import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder , FormGroup } from '@angular/forms';

import { ApiService } from '../api.service';
import { Task } from '../task';
@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent implements OnInit {
	tasks : Observable<Task[]>;
  task_form : FormGroup;

  constructor(private apiService : ApiService ) { }

  	ngOnInit(): void {
  		this.getTasks()
  	}
  	
    public getTasks(){
  		this.tasks = this.apiService.getTasks();
  	}

  	updateTask(task) {
  		console.log("Hit save");
    	this.apiService.putTask(task)
      	.subscribe(
        	(response) => {
          		//console.log(response);
          		this.getTasks();
        	}
      	)
  	  }
}
