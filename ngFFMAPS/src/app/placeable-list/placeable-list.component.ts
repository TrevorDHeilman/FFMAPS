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
  public placeables: Placeable[];
  public newPlaceable: Placeable;

  constructor(private placeableService: PlaceableService) { }

  ngOnInit() {
    this.newPlaceable = new Placeable();
    this.newPlaceable.placeabletype = new Placeabletype();
    this.placeableService.getPlaceables().subscribe(
      (placeabless) => {
        this.placeables = this.placeables;
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
