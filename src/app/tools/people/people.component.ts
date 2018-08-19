import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';
import { Person } from '../models/allmodel';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  person: Person = {firstName:"",lastName:"",email:""} ;
  personList: Person[] = [];

  constructor(private modalService: NgbModal) {  
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.firstName = this.person.firstName;
    modalRef.componentInstance.lastName = this.person.lastName;
    modalRef.componentInstance.email = this.person.email;
  }

  ngOnInit() {
    
  }

  onSubmit(){
    console.log("firstName="+this.person.firstName+"|lastName="+this.person.lastName+"|email="+this.person.email)
    console.log("onsubmit..is called")
    this.personList.push(new Person(this.person.firstName,this.person.lastName,this.person.email));
  }
}
