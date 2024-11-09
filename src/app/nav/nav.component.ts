import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit{
  pendingTasksNumber: number = 0

  constructor(private TasksService: TasksService){}

  ngOnInit(): void {
    this.TasksService.getTasksObservable()
    .subscribe({next: data => this.pendingTasksNumber = data.pendingTasks})
  }
}
