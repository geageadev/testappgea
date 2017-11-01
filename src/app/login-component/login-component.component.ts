import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.css']
})
export class LoginComponentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginUser(e) {
    console.log("**** GAG 1 ****" + this.router.url);
    console.log("**** GAG 2 ****"+this.router.routerState);
    this.router.navigate(['/dashboard'])
    
  }

}
