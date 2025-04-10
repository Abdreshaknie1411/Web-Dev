import { Component, inject, OnInit } from '@angular/core';
import { Univercity } from '../../Modules/Univercity';
import { UniverService } from '../../Service/univer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-univercity',
  imports: [CommonModule,RouterLink],
  templateUrl: './univercity.component.html',
  styleUrl: './univercity.component.css'
})
export class UnivercityComponent implements OnInit{
  
  univerList: Univercity[]=[];
  univerService : UniverService = inject(UniverService)

  ngOnInit(): void {
    this.univerService.getUniverList().subscribe(data => {
      this.univerList=data;
      console.log(this.univerList)
    })
  }


}
