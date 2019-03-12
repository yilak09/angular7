import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  messageForm :FormGroup;
  submitted =false;


  constructor(private formBuilder:FormBuilder ) {
    this.messageForm=this.formBuilder.group ({
      auther :['' ,Validators.required],
      title : ['' ,Validators.required]

    })
   }

   onSubmit () {
     this.submitted=true;

   }

  ngOnInit() {}
}
