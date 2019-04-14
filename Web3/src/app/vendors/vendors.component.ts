import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  sortBy: any = [{text:"Sort By",id:null},{text:"By Distance",id:1},{text:"By Reviews",id:2}];
  distance:any=[5,10,15,20,50,100,300];
  selectedDistance=0;
  selectedSortBy: any={text:"Sort By",id:null};
  constructor() { }
  ngOnInit() {
  }
  
  ChangeDistance(distance:any){
     this.selectedDistance=distance;
  }
  ChangeSortOrder(newSortOrder: any) { 
    this.selectedSortBy = newSortOrder;
  }
}
