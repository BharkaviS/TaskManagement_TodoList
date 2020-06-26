import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from '../api.service';
import { Task } from '../task';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
	tasks : Observable<Task[]>;
  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
  	this.getTasks();
  }
  public getTasks(){
  	this.tasks = this.apiService.getTasks();
  }
  deleteTask(task_id: number) {
    this.apiService.deleteTask(task_id)
      .subscribe(
        (response) => {
          //console.log(response);
          this.getTasks();
        }
      )
  }
}
