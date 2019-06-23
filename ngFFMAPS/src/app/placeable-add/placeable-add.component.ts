import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
  public sizeValues : number;
  public indexInt: number;
  @Output() onNewAttraction: EventEmitter<number> = new EventEmitter();

  constructor(private placeableService: PlaceableService, private placeableTypeService: PlaceableTypeService) { }
   
  ngOnInit() {    
    this.onStartUp()
  }


  optionClicked(){
    console.log(this.placeableValues);
    console.log(this.sizeValues);
  }

  submit() {
    let i:number;
    let newType: PlaceableType;
    for(i = 0; i<this.placeableTypes.length; i++ ){
      if(this.placeableTypes[i].typeId == this.placeableValues){
        newType = this.placeableTypes[i];
      }
    }

    let capacityInput: number = +(<HTMLInputElement>document.getElementById("capacityInput")).value;
    let nameInput: string = (<HTMLInputElement>document.getElementById("nameInput")).value;
    let sizeInput: number = +(<HTMLInputElement>document.getElementById("sizeList")).value;
    this.placeableService.addPlaceable(newType, capacityInput, sizeInput, nameInput).subscribe(
      (placeable) => {
        this.onNewAttraction.emit(1); 
        (<HTMLInputElement>document.getElementById("capacityInput")).value = "";
        (<HTMLInputElement>document.getElementById("nameInput")).value = "";
        (<HTMLInputElement>document.getElementById("sizeList")).value = "";
    });

  }

  onStartUp(){
    this.indexInt = 1;
    this.newPlaceableType = new PlaceableType();
    this.placeableTypeService.getPlaceableTypes().subscribe(
      (placeableTypes) => {
        this.placeableTypes = placeableTypes;
        console.log(placeableTypes);
    });
    
  }
}


