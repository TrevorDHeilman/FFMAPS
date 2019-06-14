import { Component, OnInit } from '@angular/core';
import { Placeable } from '../placeable';
import { Placeabletype } from '../placeabletype';
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
    this.newPlaceable.placeabletype = new Placeabletype();
    this.placeableService.getPlaceables().subscribe(
      (placeables) => {5
        console.log(placeables)
        let i:number = 0;
        let placeable:Placeable;
        for(i; i < placeables.length; i++){
          placeable = new Placeable();
          placeable.placeabletype = new Placeabletype();
          placeable.id = placeables[i].placeableId;
          placeable.placeabletype.typename = placeables[i].placeableType.placeableType;
          this.placeables.push(placeable);
        }
      });
  }

  submit() {
    this.placeableService.addPlaceable(this.newPlaceable).subscribe(
      (placeable) => {
        this.placeables.push(placeable);
        this.newPlaceable = new Placeable();
        this.newPlaceable.placeabletype = new Placeabletype();
      });
  }
}
