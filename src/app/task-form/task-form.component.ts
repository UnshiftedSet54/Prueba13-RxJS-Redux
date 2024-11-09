import { Component, OnInit } from '@angular/core';
import { TasksService } from '../tasks.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [ ReactiveFormsModule ],
  templateUrl: './task-form.component.html',
  styleUrl: './task-form.component.css'
})
export class TaskFormComponent implements OnInit{
  formTask: any = {}

  constructor( private TasksService: TasksService ){}

  ngOnInit(): void {
    this.formTask = new FormGroup({
      name: new FormControl(''),
      description: new FormControl('')
    })
  }

  addTask(): void{
    this.TasksService.addTask(this.formTask.value)
  }
}
