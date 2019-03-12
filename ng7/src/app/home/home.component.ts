import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'auther'];
  book:Object;
  dataSource  = [];
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.getUsers().subscribe((data)=>{
      this.book=data;
        console.log(this.book);
    }

    )
  }
  

}
