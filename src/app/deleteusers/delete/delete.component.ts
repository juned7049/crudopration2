import { Component, OnInit } from '@angular/core';
import { User } from '../../users/user';
import { UserservicesService } from '../../services/userservices.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrl: './delete.component.css'
})
export class DeleteComponent implements OnInit {

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
  delete(){
    this.userservices.deleteusers(this.id).subscribe(data =>{
      alert("delete succefully")
      this.router.navigate(['/get']);
      
    })
  }
  backtoget(){
    this.router.navigate(['/get']);
  }


}
