import { Component, OnInit } from '@angular/core';
import { PlaceableService } from '../placeable.service';
import { Placeable } from '../placeable';
import { PlaceableType } from '../placeabletype';

@Component({
  selector: 'app-placeable-list',
  templateUrl: './placeable-list.component.html',
  styleUrls: ['./placeable-list.component.css']
})
export class PlaceableListComponent implements OnInit {
  public placeables: Array<Placeable> = new Array<Placeable>();
  public newPlaceable: Placeable;

  constructor(private placeableService: PlaceableService) { }

  ngOnInit() {
    this.newPlaceable = new Placeable();
    this.newPlaceable.placeableType = new PlaceableType();
    this.placeableService.getPlaceables().subscribe(
      (placeables) => {
        console.log(placeables);
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
