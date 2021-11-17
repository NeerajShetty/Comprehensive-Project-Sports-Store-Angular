import { Component, OnInit } from '@angular/core';
import { item } from 'src/shared/Model/item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-itemindex',
  templateUrl: './itemindex.component.html',
  styleUrls: ['./itemindex.component.css']
})
export class ItemindexComponent implements OnInit {

  items!:item[]
  constructor(
    public itemService:ItemService
  ) { }

  ngOnInit(): void {
    this.itemService.getAll().subscribe(data=>{
      this.items = data;
      console.log(this.items);
    })
  }
  deleteItem(id:number){
    console.log(id)
    this.itemService.delete(id).subscribe(res => {
         this.items = this.items.filter(item => item.id !== id);
         console.log('Post deleted successfully!');
    })
    console.log("completed")

  }

}
