import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { customer } from 'src/shared/Model/customer';
@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.css']
})
export class CustomerviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
