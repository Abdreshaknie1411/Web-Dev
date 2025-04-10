import { Component, inject, OnInit } from '@angular/core';
import { Internship } from '../../Modules/Internship';
import { UniverService } from '../../Service/univer.service';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-internship',
  imports: [CommonModule,RouterLink],
  templateUrl: './internship.component.html',
  styleUrl: './internship.component.css'
})
export class InternshipComponent implements OnInit{
  
  internshipList:Internship[]=[]
  internshipService: UniverService=inject(UniverService)

  ngOnInit(): void {
    this.internshipService.getInternshipList().subscribe(
      data => {this.internshipList=data
    })
  }


  
}
