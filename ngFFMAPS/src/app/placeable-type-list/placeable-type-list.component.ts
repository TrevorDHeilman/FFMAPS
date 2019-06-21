// import { Component, OnInit, EventEmitter, Output } from '@angular/core';
// import { PlaceableType } from '../placeabletype';
// import { PlaceableTypeService } from '../placeable-type.service';

// @Component({
//   selector: 'app-placeable-type-list',
//   templateUrl: './placeable-type-list.component.html',
//   styleUrls: ['./placeable-type-list.component.css']
// })
// export class PlaceableTypeListComponent implements OnInit{
//   public placeableTypes:  Array<PlaceableType> = new Array<PlaceableType>();
//   public newPlaceableType: PlaceableType;
//   public placeableValues: PlaceableType;
//   @Output() placeableTypeEmitter: EventEmitter<PlaceableType> = new EventEmitter();

//   constructor(private placeableTypeService: PlaceableTypeService) { }

//   optionClicked(){
//     console.log(document.getElementById("placeableTypeList").firstChild.lastChild);
//     console.log(this.placeableValues);
//   }

//   ngOnInit() {
//     this.newPlaceableType = new PlaceableType();
//     this.placeableTypeService.getPlaceableTypes().subscribe(
//       (placeableTypes) => {
//         console.log(placeableTypes);
//         this.placeableTypes = placeableTypes;
//       });
//   }

// }
