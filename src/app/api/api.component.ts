import { Component, OnInit } from '@angular/core';
import { HttpservicesService} from '../Services/httpservices.service'

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  constructor(private httpservicesService: HttpservicesService) { }

  public ngOnInit(): void {
    this.httpservicesService.getComments().subscribe((data) => {
      console.log('data', data);
    });
  }

}
