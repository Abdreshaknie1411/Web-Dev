import { Component, Input, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { Router } from '@angular/router'; 

@Component({
  standalone:true,
  selector: 'app-task-item',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent extends BaseTaskComponent{

  @Output() completed = new EventEmitter<number>();

  constructor(private router: Router) { super(); }

  markAsCompleted(event: Event) {
    event.stopPropagation(); 
    this.completed.emit(this.task.id);
  }

  viewDetails() {
    this.router.navigate(['/tasks', this.task.id]);
  }



}