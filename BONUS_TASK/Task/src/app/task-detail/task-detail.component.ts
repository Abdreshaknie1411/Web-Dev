import { Component} from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BaseTaskComponent } from '../base-task/base-task.component';
import { TaskService } from '../task-service.service';

@Component({
  standalone: true,
  selector: 'app-task-detail',
  imports: [CommonModule, RouterModule],
  templateUrl: './task-detail.component.html',
  styleUrl: './task-detail.component.css'
})
export class TaskDetailComponent extends BaseTaskComponent{
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { super(); }

  ngOnInit() {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.task = this.taskService.getTaskById(+taskId)!;
    }
  }
}