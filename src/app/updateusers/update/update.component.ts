import { Component, OnInit } from '@angular/core';
import { UserservicesService } from '../../services/userservices.service';
import { User } from '../../users/user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css'
})
export class UpdateComponent implements OnInit{
  id: number =0;
  user:User = new User();

constructor(private userservices:UserservicesService,
  private route:ActivatedRoute , private router:Router){}

  ngOnInit(): void {
     this.id = this.route.snapshot.params['id'];
      this.userservices.getuserbyid(this.id).subscribe(data =>{
       this.user=data;
      });
  }
  
  update(){
    this.userservices.updateusers(this.id,this.user).subscribe(data=>{
      this.router.navigate(['/get']);
    })
  }
  

  
}