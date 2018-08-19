import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../models/allmodel';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User[];
  usr:User;
  isLoading:boolean = false;
  showUser:boolean =false;
  showSingleUser:boolean=false;
  constructor(private userservice: UsersService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.isLoading=true;
    this.showUser =false;
     this.userservice.getUsers().subscribe((data:User[]) => {
     this.user=data;
     this.isLoading=false;
   });
   //console.log("user=>"+this.user.id)
  }

  getUserDetail(user:User){
    this.showUser =true;
    this.usr = null;
    this.showSingleUser=false;
    
    console.log("user login:"+user.login);
    this.userservice.getUser(user.login).subscribe(
      (usr:User)=>{
        this.showSingleUser=true;
        this.usr=usr;
      }

    );
  }

}
