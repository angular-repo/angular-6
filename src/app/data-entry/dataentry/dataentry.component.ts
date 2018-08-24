import { Component, OnInit } from '@angular/core';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-dataentry',
  templateUrl: './dataentry.component.html',
  styleUrls: ['./dataentry.component.css']
})
export class DataentryComponent implements OnInit {

  property = {
  };

  public result;

  propertyType = [
    { "id": 1, "name": "Apartments" },
    { "id": 2, "name": "Condos/Coops" },
    { "id": 3, "name": "Town Home" },
    { "id": 4, "name": "Manufactured" },
    { "id": 5, "name": "Forms" },
    { "id": 6, "name": "Single Family" },
    { "id": 7, "name": "Multi Family" }
  ]


  // property.homeType=this.propertyType[0].name;
  constructor(private propertyService: PropertyService) { }

  ngOnInit() {
  }

  saveproperty() {
    console.log(this.property)
    this.propertyService.savePropertyService(this.property).subscribe((response) =>{
      this.result = response;
      console.log(this.result)
    },(err) => {
      console.log(err)
    })
    
  }
}
