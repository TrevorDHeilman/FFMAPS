import { Component, OnInit } from '@angular/core';
import { PlaceableService } from '../placeable.service';
import { Placeable } from '../placeable';
import { PlaceableType } from '../placeabletype';
import { PlaceableTypeService } from '../placeable-type.service';

@Component({
  selector: 'app-placeable-add',
  templateUrl: './placeable-add.component.html',
  styleUrls: ['./placeable-add.component.css']
})
export class PlaceableAddComponent implements OnInit {

  public newPlaceable: Placeable;
  public newPlaceableType: PlaceableType;
  public placeableTypes: Array<PlaceableType> = new Array<PlaceableType>();
  public placeableValues : number;
  public indexInt: number;
  //public employeeCapacity: number;

  constructor(private placeableService: PlaceableService, private placeableTypeService: PlaceableTypeService) { }
   
  ngOnInit() {    
    this.onStartUp()
  }


  optionClicked(){
    console.log(this.placeableValues);
    // console.log(this.placeableValues.typeId);
    // console.log(this.placeableValues.typeName);
  }

  submit() {
    let i:number;
    let newType: PlaceableType;
    for(i = 0; i<this.placeableTypes.length; i++ ){
      if(this.placeableTypes[i].typeId == this.placeableValues){
        newType = this.placeableTypes[i];
      }
    }

    console.log('New Placeable ' + newType);
    //console.log('Employee Capacity ' + this.employeeCapacity);
    let capacityInput: number = +(<HTMLInputElement>document.getElementById("capacityInput")).value;
    let nameInput: string = (<HTMLInputElement>document.getElementById("nameInput")).value;
    let sizeInput: number = +(<HTMLInputElement>document.getElementById("capacityInput")).value;
    console.log("Capacity Test " + capacityInput)
    this.placeableService.addPlaceable(newType, capacityInput, sizeInput, nameInput).subscribe(
      (placeable) => {
        console.log(placeable);
        this.newPlaceable = placeable;
        console.log(this.newPlaceable);
        //this.newPlaceable.placeableType = new PlaceableType();
    });
  }

  onStartUp(){
    this.indexInt = 1;
    this.newPlaceableType = new PlaceableType();
    this.placeableTypeService.getPlaceableTypes().subscribe(
      (placeableTypes) => {
        console.log(placeableTypes);
        this.placeableTypes = placeableTypes;
    });
  }
}


