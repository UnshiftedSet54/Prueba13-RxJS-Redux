import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TasksService {
  private tasks: Array<any> = []
  private taskSubject = new Subject()

  constructor() { }

  setSubject(): void{
    this.taskSubject.next({
      pendingTasks: this.tasks.filter(task => task.status === 'pendiente').length,
      tasks: this.tasks
    })
  }

  addTask(task: any): void {
    this.tasks.push({...task, status: 'pendiente', id: this.tasks.length + 1})
    this.setSubject()
  }

  updateTask(id: number): void{
    const taskIndex = this.tasks.findIndex(task => task.id === id)
    const taskStatus = this.tasks[taskIndex].status
    this.tasks[taskIndex].status = taskStatus === 'pendiente' ? 'realizado':'pendiente'
    this.setSubject()
  }

  deleteTask(id: number): void{
    const taskIndex = this.tasks.findIndex(task => task.id === id)
    this.tasks.splice(taskIndex, 1)
    this.setSubject()
  }

  getTasks(): Array<any> {
    return this.tasks
  }

  getTasksObservable(): Observable<any> {
    return this.taskSubject.asObservable()
  }
}
