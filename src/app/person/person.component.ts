import { Component, Injectable, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators} from '@angular/forms';
import { PersonGuardService } from '../service/PersonGuard.service';

@Injectable()
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers:[PersonGuardService]
})
export class PersonComponent {

  personForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {

    this.personForm=this.fb.group({
      FirstName:['',Validators.required],
      MiddleName:[''],
      LastName:['',Validators.required],
      dept:['',Validators.required],
      Gender:['', Validators.required],
      Dob:['',[Validators.required]],
      Address:['',Validators.required],
      Pincode:['',[Validators.required,Validators.maxLength(6)]],
    })
  }
  dept: any[] = [
    {value: 'IT', viewValue: 'IT'},
    {value: 'HR', viewValue: 'HR'},
    {value: 'Payroll', viewValue:'Payroll'},
    {value:'Networking', viewValue:'Networking'},
    {value:'Admin',viewValue:'Admin'}
  ];

  Gender: any[] = [
    {value: 'Male', viewValue: 'Male'},
    {value: 'Female', viewValue: 'Female'},
  ];

}
