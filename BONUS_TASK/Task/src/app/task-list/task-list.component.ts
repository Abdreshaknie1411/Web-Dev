import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../task-service.service';
import { Task } from '../task';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, RouterModule, TaskItemComponent], 
  templateUrl:"task-list.component.html",
  styleUrl: "task-list.component.css"
})
export class TaskListComponent implements OnInit {
  tasks: Task[] = []; 

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.tasks = this.taskService.getTasks();
  }

  onTaskCompleted(taskId: number) {
    this.taskService.updateTaskStatus(taskId, 'Completed');
    this.tasks = this.taskService.getTasks(); 
  }
}