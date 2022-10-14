import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: string = ""
  login() {
    console.log("click");
  }

  emailinput(val: any) {
    this.data = val
    console.log(val, "emailvalue")
  }

  passwordfield(val: any) {
    console.log(val, "passwordfield")
  }



  // loginForm: FormGroup | any;
  // title = 'material-login';

  constructor(
    // private router:Router
  ) {
    console.log( this.data, "<<-- data")
    // this.loginForm = new FormGroup({
    //   email: new FormControl('', [Validators.required, Validators.email,Validators.pattern(
    //     '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
    //   ),]),
    //   password: new FormControl('', [Validators.required,Validators.pattern(
    //     '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$'
    //   )])
    // });

  }

  ngOnInit(): void {
  }

  // onSubmit(){
  //   if(!this.loginForm.valid){
  //     return;
  //   }
  //   localStorage.setItem('user',this.loginForm.value)
  //   this.router.navigate(['/home'])

  // }
  showFormControls(form: any) {
    return form && form.controls.email &&
      form.controls.email.value; // Dr. IQ
  }


}
