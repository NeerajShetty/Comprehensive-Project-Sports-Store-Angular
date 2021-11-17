import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-itemcreate',
  templateUrl: './itemcreate.component.html',
  styleUrls: ['./itemcreate.component.css']
})
export class ItemcreateComponent implements OnInit {

  form!: FormGroup;
  constructor(
    public service: ItemService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      color: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
    });
  }
  get f(){
    return this.form.controls;
  }
  
  submit(){
    console.log(this.form.value);
    this.service.create(this.form.value).subscribe(res => {
        console.log('Item created successfully!');
        this.router.navigateByUrl('item/index');
  
    })
  
  }

}
