import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl} from '@angular/forms';
import { UserModel } from '../user-model';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json','Accept': 'application/json'})
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

    profileForm = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl(''),
    Role: new FormControl(''),
  });

 
  
  constructor( private  _http:HttpClient) { }

  ngOnInit() {
  }

  onSubmit(){
  
    this._http.post('http://localhost:5000/api/Users',this.profileForm.value,httpOptions).subscribe(status=> console.log(JSON.stringify(status)));
  }

}
