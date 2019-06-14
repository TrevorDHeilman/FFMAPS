import { Component, OnInit } from '@angular/core';
import { Placeable } from '../placeable';
import { PlaceableType } from '../placeabletype';
import { PlaceableService } from '../placeable.service';

@Component({
  selector: 'app-placeable-list',
  templateUrl: './placeable-list.component.html',
  styleUrls: ['./placeable-list.component.css']
})
export class PlaceableListComponent implements OnInit {
  public placeables: Placeable[] = new Array();
  public newPlaceable: Placeable;

  constructor(private placeableService: PlaceableService) { }

  ngOnInit() {
    this.newPlaceable = new Placeable();
    this.newPlaceable.placeableType = new PlaceableType();
    this.placeableService.getPlaceables().subscribe(
      (placeables) => {
        console.log(placeables)
        // let i:number = 0;
        // let placeable:Placeable;
        // for(i; i < placeables.length; i++){
        //   placeable = new Placeable();
        //   placeable.placeableType = new PlaceableType();
        //   placeable.id = placeables[i].placeableId;
        //   placeable.placeableType.typeName = placeables[i].placeableType.placeableType;
        //   this.placeables.push(placeable);
        // }
        this.placeables = placeables;
      });
  }

  submit() {
    this.placeableService.addPlaceable(this.newPlaceable).subscribe(
      (placeable) => {
        this.placeables.push(placeable);
        this.newPlaceable = new Placeable();
        this.newPlaceable.placeableType = new PlaceableType();
      });
  }
}
