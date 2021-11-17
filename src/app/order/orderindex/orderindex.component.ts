import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { order } from 'src/shared/Model/order';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orderindex',
  templateUrl: './orderindex.component.html',
  styleUrls: ['./orderindex.component.css']
})
export class OrderindexComponent implements OnInit {

  id!:number
  orders!:order[]
  constructor(
    public orderService:OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.orderService.getAll(this.id).subscribe(data=>{
      this.orders = data;
      console.log(this.orders);
    })
  }

}
