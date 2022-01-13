import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../Services/httpservices.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  constructor(private httpservicesService: HttpservicesService) { }

  ngOnInit(): void {
    const payload = {
            "id" : "",
            "firstName" : "Long2",
            "lastName" : "Mai2",
            "email" : "longmv@gmail.com2"
    };
    this.httpservicesService.postComments(payload).subscribe(data => {
      console.log('postComments', data);
    });
  }

}
