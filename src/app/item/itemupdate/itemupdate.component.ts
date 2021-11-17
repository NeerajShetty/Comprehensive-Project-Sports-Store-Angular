import { Component, OnInit } from '@angular/core';
import { item } from 'src/shared/Model/item';
import { ItemService } from '../item.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-itemupdate',
  templateUrl: './itemupdate.component.html',
  styleUrls: ['./itemupdate.component.css']
})
export class ItemupdateComponent implements OnInit {

  id!:number;
  form!: FormGroup;
  item!:item

  constructor(
    public itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.itemService.find(this.id).subscribe((data: item)=>{
      this.item = data;
    });
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),

    });
  }  
  submit(){
    console.log(this.form.value); 
    this.itemService.update(this.id, this.form.value).subscribe(res => { 
         console.log('Item updated successfully!'); 
         this.router.navigateByUrl('item/index'); 
    })

  }
}
