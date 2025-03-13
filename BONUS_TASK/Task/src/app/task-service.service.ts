import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({ providedIn: 'root' })
export class TaskService {
  private tasks: Task[] = [
    {
      id: 1,
      title: 'WD bonus task',
      description: 'Finish the task management system',
      category: 'Study',
      status: 'Not completed',
      deadline: new Date('2025-03-09')
    },
    {
      id: 2,
      title: 'ML seminar 7',
      description: 'CLT and LLN',
      category: 'Study',
      status: 'Completed',
      deadline: new Date('2025-03-08')
    },
    {
      id: 3,
      title: 'UNIX AC 8th week',
      description: 'Data level Parallelism',
      category: 'Study',
      status: 'Not completed',
      deadline: new Date('2025-03-11')
    }
  ];

  getTasks() { return this.tasks; }
  getTaskById(id: number): Task | undefined { return this.tasks.find(t => t.id === id); }

  updateTaskStatus(id: number, status: Task['status']) {
    const task = this.tasks.find(t => t.id === id);
    if (task) task.status = status;
  }
}