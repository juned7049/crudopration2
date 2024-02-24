import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { UserservicesService } from '../../services/userservices.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit {

   user :User= new User();
 constructor(private userservice:UserservicesService,
  private router:Router){}

ngOnInit(): void {
  
}

adduser(){
  console.log(this.user);
  this.userservice.adduser(this.user).subscribe(data=>{
   console.log(data);
   alert(`User successfully added!\nName: ${data.name}\nAddress: ${data.address}\noccupation: ${data.occupation}`);

   this.router.navigate(['/get']);
  });

  
}
}
