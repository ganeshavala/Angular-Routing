import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent implements OnInit {
  errorMessage:string="Page Not Found";

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
    console.log(this.route.snapshot.data);
    this.errorMessage = this.route.snapshot.data['message'];
    this.route.data.subscribe((data: Data)=>{
      this.errorMessage = data['message'];
  })
}

}
