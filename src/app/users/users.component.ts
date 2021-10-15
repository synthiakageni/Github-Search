import { Component, OnInit } from '@angular/core';
import{Users} from '../users';
import{UserService} from '../user-service';
import{Repository} from '../repository';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
    
  users:any=Users;
  repository:any=Repository;


  constructor() { }

  ngOnInit(): void {
  }

}
