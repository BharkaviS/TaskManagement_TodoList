import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

import { ApiService } from '../api.service';
import { Task } from '../task';

@Component({
  selector: 'tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
	tasks : Observable<Task[]>;
  task_form : FormGroup;
  constructor(private apiService : ApiService , private form_builder : FormBuilder) { }

  ngOnInit(): void {
     this.task_form = this.form_builder.group({
      Title: '',
      Content: '',
      Due_date:'',
      Labels:'',
      Status:''
    });
     
 
  }

  public getTasks(){
  	this.tasks = this.apiService.getTasks();
  }
  onSubmit() {
    // Create the Task.
    console.log("in submit")
    this.apiService.postTask(this.task_form.value)
      .subscribe(
        (response) => {
         // console.log(response);
          this.getTasks();
        }
      )
      this.task_form.reset();
    }
    
     Clear(){
       this.task_form.reset();
     }

  
 }