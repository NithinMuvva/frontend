
import { Component,OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import {NavbarcompComponent} from '../../navbarcart/navbarcomp/navbarcomp.component'
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
   styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  private data: any=[];
  private salesTax:number;
  private total:number;
  private isPayment:boolean=false;
  constructor(private router: Router) { 
  // var state=this.router.getCurrentNavigation().extras.state;
  console.log(999,this.router.getCurrentNavigation().extras);
  var state=this.router.getCurrentNavigation().extras.state;
  this.data=state.data;
  this.isPayment=state.isPayment;
  }


  ngOnInit() {
    
    // this.data=[{"name":"dfbdb","quantity":12,"price":12},{"name":"wertyr","quantity":4 ,"price":20}];
  //   this.data=this.router.getCurrentNavigation().extras.state.data;
  //   console.log(this.data);
  //   // this.data=state.data;
  // this.isPayment=this.router.getCurrentNavigation().extras.state.isPayment;
  //  console.log(this.data);
  // console.log(this.router.getCurrentNavigation().extras);
    this.recalculate(null);
  }
 
  recalculate(event){
    var sum=0;
    for( var i=0;i<this.data.length;i++){
      sum=sum+(this.data[i]["quantity"]*this.data[i]["price"]);
    }
    this.total=sum;
    this.salesTax=(8*this.total/100);
    console.log(this.total);
    console.log(this.salesTax);
  }
 
  redirecttopayment(){
    
    this.router.navigateByUrl('/payment');
  }
}