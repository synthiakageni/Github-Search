import { Injectable } from '@angular/core';
import { HttpClient  } from "@angular/common/http";
import { environment } from "../environments/environment";
import{Repository} from './repository';
import{Users} from './users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    users:any = Users;
  repository:any = Repository;
  newRepository: any;

  constructor(private http: HttpClient) {
    this.users = new Users( "","", 0, "",  new Date());
    this.repository = new Repository("", "", "", new Date());
   }

   getRepo (username:string){
    interface ApiResponse {
      name: string;
      description: string;
      html_url: string;
      created_on: Date;
       }

       let api = environment.apiUrl + '/' +username + '/repos?';
        console.log(api)
       let promise = new Promise((resolve ,  reject) => {
        this.http.get<ApiResponse>(api).toPromise().then(  getRepoResponse => {
          this.newRepository = getRepoResponse;
            console.log(this.newRepository);
          resolve(this.newRepository);
        },
        error => {
          
          reject(error);
        })
    })
    return promise;


   }

   getUsers (username:string){

     interface ApiResponse {
            html_url: string;
            description: string;
            created_on: Date;
            login: string;
            public_repository: number;
            
           
     }
      let api = environment.apiUrl+ '/' +username ;
      

      
      let promise = new Promise((resolve ,  reject) => {
        this.http.get<ApiResponse>(api).toPromise().then(  (response:any) => {
          console.log(this.users)
          this.users.html_url = response.html_url;
          this.users.description = response.description;
          this.users.created_on = response.created_on;
          this.users.login = response.login;
          this.users.public_repository  = response.public_repository;

          this.users.bio = response.bio;
          this.users.name = response.name;

          resolve(this.users);
        },
        error => {
          
          reject(error);
        })
    })
    return promise;

    

}
   }


