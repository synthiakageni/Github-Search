import { Component, OnInit } from '@angular/core';
import{Users} from '../users';
import {  UserService } from "../user-service";
import{Repository} from '../repository';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    
  users:any=Users;
  repository:any=Repository;
  

  constructor(private userService:  UserService, public myRepository: UserService) { }

  ngOnInit(): void {}

    doSearch(username: string){
      console.log(username)
      console.log( this.myRepository.getRepo(username))
      this.myRepository.newRepository;
      console.log(this.myRepository.getRepo(username))
      this.userService.getUsers(username);
     this.repository= this.myRepository.getRepo(username);
     console.log(this.repository)
      this.users = this.userService.users;
     this.ngOnInit();
       }

  }


