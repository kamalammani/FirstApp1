import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  
   // initialized Required data 
   name:String = "Employee Management System";
   enteredFirstName:String = "";
   enteredLastName:String = "";
   enteredEmail:String = "";
   enteredNumber:String = "";
   enteredAddress:String = "";
   enteredUserName:String = "";
   enteredPassword:String = "";
   enteredGender:String = "";
   enteredQualification:String = "";
   enteredExperience:String = "";
   enteredLanguage:String = "";
   
  constructor() { 
   }

   
  // checks empty and reseting the data
  printValue(){
   if((this.enteredFirstName!="")&&(this.enteredLastName!="")&&(this.enteredEmail!="")&&(this.enteredNumber!="")&&(this.enteredAddress!="")&&(this.enteredUserName!="")&&(this.enteredPassword!="")&&(this.enteredGender!="")&&(this.enteredQualification!="")&&(this.enteredExperience!="")&&(this.enteredLanguage!="")){

    this.enteredFirstName = "";
    this.enteredLastName = "";
    this.enteredEmail = "";
    this.enteredNumber = "";
    this.enteredAddress = "";
    this.enteredUserName = "";
    this.enteredPassword = "";
    this.enteredGender = "";
    this.enteredQualification = "";
    this.enteredExperience = "";
    this.enteredLanguage = "";

   }
   else{

    console.log("Fill all the empty fields, Kindly see the already existing data above for example");
    console.log("=======================");

   }
  }

   ngOnInit(): void
   {
    
    // initialized array in ngOnInit
    type MyArrayType = Array<{FirstName: String, LastName: String, Email: String,ContactNumber: String,Address: String,UserName: String,Password: String, Gender: String, Qualification: String, Experience: String, Language: String}>;

    let arr: MyArrayType = [{
      FirstName: 'Manikandan', 
      LastName: 'M',
      Email: 'vairavanmani2@gmail.com',
      ContactNumber: '8940433270',
      Address: 'chennai',
      UserName: 'Mani',
      Password: 'Mani@123',
      Gender: 'Male',
      Qualification : 'B.E',
      Experience: '0-2',
      Language: 'Java'
    }];

    if((this.enteredFirstName!="")&&(this.enteredLastName!="")&&(this.enteredEmail!="")&&(this.enteredNumber!="")&&(this.enteredAddress!="")&&(this.enteredUserName!="")&&(this.enteredPassword!="")&&(this.enteredGender!="")&&(this.enteredQualification!="")&&(this.enteredExperience!="")&&(this.enteredLanguage!=""))
    {
      arr.push({
        FirstName: this.enteredFirstName, 
        LastName: this.enteredLastName,
        Email: this.enteredEmail,
        ContactNumber: this.enteredNumber,
        Address:this.enteredAddress,
        UserName: this.enteredUserName,
        Password: this.enteredPassword,
        Gender: this.enteredGender,
        Qualification: this.enteredQualification,
        Experience: this.enteredExperience,
        Language: this.enteredLanguage
       });

  }
  
  console.log("EMPLOYEE DETAILS");

    for(let i=0;i<arr.length;i++)
    {
      let index = i+1;
      console.log("S.NO - "+index);
      console.log("FirstName : "+arr[i].FirstName);
      console.log("LastName : "+arr[i].LastName);
      console.log("Email : "+arr[i].Email);
      console.log("Email : "+arr[i].ContactNumber);
      console.log("Address : "+arr[i].Address);
      console.log("UserName: "+arr[i].UserName);
      console.log("Password : "+arr[i].Password);
      console.log("Gender : "+arr[i].Gender);
      console.log("Qualification : "+arr[i].Qualification);
      console.log("Experience : "+arr[i].Experience);
      console.log("Languages : "+arr[i].Language);
      console.log("-----------------------------------");      

    }
  }
  
}
