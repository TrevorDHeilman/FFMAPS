import { Component, OnInit, Input } from '@angular/core';
import { Placeable } from '../placeable';
import { PlaceableType } from '../placeabletype';
import { PlaceableService } from '../placeable.service';

@Component({
  selector: 'app-placeable-list',
  templateUrl: './placeable-list.component.html',
  styleUrls: ['./placeable-list.component.css']
})
export class PlaceableListComponent implements OnInit {
  public placeables: Array<Placeable> = new Array<Placeable>();
  public newPlaceable: Placeable;
  @Input() public minify:number = 0;

  constructor(private placeableService: PlaceableService) { }

  ngOnInit() {
    this.onStartUp();
  }

  updateAttractions(){
    this.onStartUp;
  }

  onStartUp(){
    this.newPlaceable = new Placeable();
    this.newPlaceable.placeableType = new PlaceableType();
    this.placeableService.getPlaceables().subscribe(
      (placeables) => {
        console.log(placeables);
        this.placeables = placeables;
      }
    );
  }
}
