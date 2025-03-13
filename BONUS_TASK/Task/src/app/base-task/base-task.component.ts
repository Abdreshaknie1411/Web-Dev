import { Component , Input } from '@angular/core';
import { Task } from '../task';

@Component({
  standalone:true,
  selector: 'app-base-task',
  imports: [],
  templateUrl: './base-task.component.html',
  styleUrl: './base-task.component.css'
})
export class BaseTaskComponent {
  @Input() task!:Task;
}