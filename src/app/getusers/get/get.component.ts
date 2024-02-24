import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../../services/userservices.service';
import { User } from '../../users/user';
import { Router } from '@angular/router';



@Component({
  selector: 'app-get',
  templateUrl: './get.component.html',
  styleUrl: './get.component.css'
})
export class GetComponent implements OnInit{

  user?:User[]=[];
  constructor(private userservices:UserservicesService , private route:Router){
  }
  
  ngOnInit(): void {
    this.getusers();
  }
  
  getusers(){
    this.userservices.getuser().subscribe(
      (data: User[]) => {
        this.user = data;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
  update(id?:number){
    console.log(id);
    this.route.navigate(['/update',id]);
  }
  delete(id?: number){
    console.log(id);
    this.route.navigate(['/delete', id]);
    

  }
}
