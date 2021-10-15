import { Component, OnInit } from '@angular/core';
import{Users} from '../users';
import {  UserService } from "../user-service";
import{Repository} from '../repository';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    
  users:any=Users;
  repository:any=Repository;
  

  constructor(private userService:  UserService, public repos: UserService) { }

  ngOnInit(): void {}

    Search(username: string){
      this.userService.getUsers(username);
      this.repos.getRepo(username);
      this.users = this.userService.users;
     this.ngOnInit();
       }

  }


