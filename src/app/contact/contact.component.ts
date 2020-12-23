import { Component, OnInit } from '@angular/core';
//declare let Email: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  name: string;
  email: string;
  msgText: string;
  subject: string;
  constructor() { }

  ngOnInit(): void {
  }
  // submitDetails(){
  //   if(this.contactFrom.name !="" && this.contactFrom.email !="" && this.contactFrom.subject!="" && this.contactFrom.msgText !=""){
  //     console.log("from cubmitted");

  // Email.send({
  // Host : 'smtp.elasticemail.com',
  // Username : 'kartheekg68@gmail.com',
  // Password : 'Gmail@4866',
  // To : 'kartheekl68@gmail.com',
  // From : this.contactFrom.email,
  // Subject : this.contactFrom.subject,
  // Body : `
  // <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${this.contactFrom.name} <br /> <b>Email: </b>${this.contactFrom.email}<br /> <b>Subject: </b>${this.contactFrom.subject}<br /> <b>Message:</b> <br /> ${this.contactFrom.msgText} <br><br> <b>~End of Message.~</b> `
  // })
  // .then( message => {alert(message); this.clearDetails(); } );

  //   }else{
  //     alert("Please enter all fields to contact");
  //   }
  // }
  clearDetails(){
    this.name = '';
    this.email = '';
    this.msgText = '';
    this.subject = '';
  }
  submitDetails(ev) {
    ev.preventDefault();
    if(this.name !="" && this.email !=""  && this.msgText !=""){
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        alert('Your message has been sent. Thank you!'); this.clearDetails();
      } else {
        let resp =  JSON.parse(xhr.responseText);
        alert(resp.error);
      }

    };
    xhr.send(data);
  }else{
    alert("Please enter all fields to contact");
  }
  }
}
