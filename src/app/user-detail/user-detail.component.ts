import { Component,OnInit,DoCheck} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit,DoCheck{
  constructor(private route:ActivatedRoute){
 }
 clientId:any;
  ngOnInit(): void {
    
  }

  ngDoCheck(): void {
    this.clientId=this.route.snapshot.paramMap.get('id');
  }
  
  
}
