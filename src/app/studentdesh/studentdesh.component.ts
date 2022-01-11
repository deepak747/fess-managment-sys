import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { StudentDashModele } from './studentdesh.module';

@Component({
  selector: 'app-studentdesh',
  templateUrl: './studentdesh.component.html',
  styleUrls: ['./studentdesh.component.css']
})
export class StudentdeshComponent implements OnInit {
  formvalue!: FormGroup;
  studentModelObj: StudentDashModele = new StudentDashModele;
  AllStudents: any;
  showadd!: boolean;
  showupdate!: boolean;

  constructor(private formbuilder: FormBuilder, private apiservice: ApiService) { }

  ngOnInit(): void {
    this.formvalue = this.formbuilder.group({
      firstName: [''],
      LastName: [''],
      email: [''],
      mobile: [''],
      fees: [],
    })

    this.getAllStudent()
    //this.deleteStu(data)
  }

  postStudentDetails() {
    this.studentModelObj.firstName = this.formvalue.value.firstName;
    this.studentModelObj.LastName = this.formvalue.value.LastName;
    this.studentModelObj.email = this.formvalue.value.email;
    this.studentModelObj.mobile = this.formvalue.value.mobile;
    this.studentModelObj.fees = this.formvalue.value.fees;

    this.apiservice.postStudent(this.studentModelObj).subscribe(res => {
      console.log("post method data is", res)
      alert("student record added successfully");
      this.formvalue.reset();
      this.getAllStudent();
    },
      err => {
        alert("Somthing went wrong !!!")

      })
  }

  getAllStudent() {
    this.apiservice.getStudent().subscribe(data => {
      this.AllStudents = data;
      console.log("All Students data is:", this.AllStudents);
    })
  }

  deleteStu(data: { id: any; }) {
    this.apiservice.deleteStudent(data.id).subscribe(data => {
      alert("Data Deleted successfully")
      this.getAllStudent();
    })
  }

  EditStudent(data:any) {
    //  this.apiservice.updateStudent(data).subscribe(data=>{
    //    
    //  })
    this.showadd=false;
    this.showupdate=true;

    this.formvalue.patchValue({
      id:data.id,
      firstName: data.firstName,
      LastName: data.LastName,
      email: data.email,
      mobile: data.mobile,
      fees: data.fees
    })     
                // 
  }
      updateStudentDetails()
      {
        console.log("Update data should be access !!!!")
        this.studentModelObj.firstName=this.formvalue.value.firstName;
        this.studentModelObj.LastName=this.formvalue.value.LastName;
        this.studentModelObj.email=this.formvalue.value.email;
        this.studentModelObj.mobile=this.formvalue.value.mobile;
        this.studentModelObj.fees=this.formvalue.value.fees;
          console.log("first name is",this.formvalue.value.LastName)
         this.apiservice.updateStudent(this.studentModelObj.id,this.studentModelObj).subscribe(res=>{
            alert("data update Successfullt")
            this.formvalue.reset();
            this.getAllStudent();
           })
      }

        showallstudent()
        {
          this.formvalue.reset();
          this.showadd=true;
          this.showupdate=false;
        }
    }
