import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent implements OnInit{
  tasks: Array<any> = []

  constructor(private TasksService: TasksService) {}

  ngOnInit(): void {
    this.TasksService.getTasksObservable().subscribe({next: data => this.tasks = data.tasks})
  }

  updateTask(event: Event): void{
    const target = event.target as HTMLInputElement
    this.TasksService.updateTask(Number(target.id) + 1)
  }

  deleteTask(event: Event): void{
    const target = event.target as HTMLDivElement
    this.TasksService.deleteTask(Number(target.id) + 1)
  }
}
