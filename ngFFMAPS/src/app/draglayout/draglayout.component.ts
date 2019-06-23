import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { EventService } from '../event.service';
import { Map } from '../map';

@Component({
  selector: 'app-draglayout',
  templateUrl: './draglayout.component.html',
  styleUrls: ['./draglayout.component.css']
})
export class DraglayoutComponent implements OnInit, AfterViewInit {

  public newMap : Map;
  public maps : Map[];
  public size1
  public rootElem : HTMLElement;

  constructor(private eventService: EventService) { }
  public dynamic: number;
  @Input() editable : number;
  @Input() eventSearch : number;

  ngOnInit() {
    this.dynamic = 1;
    if(this.dynamic > 0){
      this.rootElem = document.getElementById("layoutAction");

      if (this.eventSearch<1){
        this.eventService.getEventMapById(1).subscribe(
          (maps) => {
            console.log(maps);
            this.maps = maps;
          } 
        );
      } else{
        this.eventService.getEventMapById(this.eventSearch).subscribe(
          (maps) => {
            console.log(maps);
            this.maps = maps;
          } 
        );
      }
    }
  }

  searchOne(){
    this.eventService.getEventMapById(1).subscribe(
      (maps) => {
        console.log(maps);
        this.maps = maps;
      } 
    );
  }
  
  searchMapId(id:number){
    this.eventService.getEventMapById(id).subscribe(
      (maps) => {
        console.log(maps);
        this.maps = maps;
      } 
    );
  }

  ngAfterViewInit(){
  }

  setDragableClass(map:Map){ // used to set color and size of drag-ables
    let isRide = (map.placeable.placeableType.typeId == 1);
    let isConcession = (map.placeable.placeableType.typeId == 2);
    let isGame = (map.placeable.placeableType.typeId == 3);
    let size1 = (map.placeable.size == 1);//'example-box'
    let size2 = (map.placeable.size == 2);//'example-box-big'
    let size3 = (map.placeable.size == 3);//'example-box-long-hor'
    let size4 = (map.placeable.size == 4);//'example-box-long-vert'
    let size5 = (map.placeable.size == 5);//'example-box-longer-vert'
    let size6 = (map.placeable.size == 6);//'example-box-longer-hor'
    return {'ride':isRide , 'concession':isConcession, 'game':isGame,
    'example-box':size1, 'example-box-big':size2, 'example-box-long-hor':size3,
    'example-box-long-vert': size4, 'example-box-longer-hor': size5,
    'example-box-longer-vert': size6};
    }

    swapToEdit(){
      this.editable = 2;
    }

    setDragableStyle(map:Map){
      let hasTransform = (map.transform != null && map.transform.length>0)
      if(hasTransform)
        return {'transform':map.transform}
      else
        return{}
    }

  fireEvent(e){
    // console.log(e)
    // console.log(e.fromElement)
    let res = "" + e.fromElement.style.transform.substr(12);
    // console.log(res)
    // console.log(e.fromElement.style.transform);
    console.log("xDim: " +res.substring(0, res.search("p")));
    res = res.substring(res.search("p")+4);
    res = res.substring(0,res.search("p"));
    console.log("yDim: " +res);
  }

  processLayout(){
    console.log(document.getElementById("layoutAction").children);
    let actionTags = document.getElementById("layoutAction").children;
    actionTags = actionTags;
    for(let i :number = 0; i<actionTags.length; i++){
      let transform = (<HTMLInputElement>actionTags[i]).style.transform;
      let xdim = "" + (<HTMLInputElement>actionTags[i]).style.transform.substr(12);
      xdim = xdim.substring(0, xdim.search("p"));
    }
    this.saveActiveLayout()
  }

  processActiveLayout(){
    let actionTags = document.getElementById("layoutAction").children;
    // let reactionTags = document.getElementById("layoutReaction").children;
    for(let i :number = 0; i<actionTags.length; i++){
      let transform = (<HTMLInputElement>actionTags[i]).style.transform = this.maps[i].transform;
      // (<HTMLInputElement>reactionTags[i]).style.transform = transform;
      // transformList.innerHTML += "<p>"+transform + "</p>";
    }
  }

  saveActiveLayout(){
    let actionTags = document.getElementById("layoutAction").children;
    // let reactionTags = document.getElementById("layoutReaction").children;
    for(let i :number = 0; i<actionTags.length; i++){
      let transform = (<HTMLInputElement>actionTags[i]).style.transform;
      if(transform.length > 50){
        let transform1 = transform.substring(0,transform.indexOf(")")+1);
        let transform2 = transform.substring(transform.indexOf(")")+2);
        let x1 = transform1.substring(transform1.indexOf("(")+1, transform1.indexOf('p'));
        let x2 = transform2.substring(transform2.indexOf("(")+1, transform2.indexOf('p'));
        transform1 = transform1.substring(transform1.indexOf(' ')+1);
        transform2 = transform2.substring(transform2.indexOf(' ')+1);
        let y1 = transform1.substring(0,transform1.indexOf('p'));
        let y2 = transform2.substring(0,transform2.indexOf('p'));
        let nx1 = parseInt(x1, 10);
        let nx2 = parseInt(x2, 10);
        let ny1 = parseInt(y1, 10);
        let ny2 = parseInt(y2, 10);
        // console.log(x1 +" " + x2 + " " + y1 +" " + y2)
        // console.log(nx1 +" " + nx2 + " " + ny1 +" " + ny2)
        let transformX = nx1 +nx2;
        let transformY = ny1 +ny2;
        transform = "translate3d(" + transformX + "px, " + transformY  +"px, 0px)";
      }
      console.log(transform);
      this.maps[i].transform = transform;      
      // (<HTMLInputElement>reactionTags[i]).style.transform = transform;
      // transformList.innerHTML += "<p>"+transform + "</p>";
    }
    console.log(this.maps);
    // updateEventMaps
    this.eventService.updateEventMaps(this.maps).subscribe(
      (maps) => {
        console.log("updated, maybe?");
        console.log(maps);
        this.editable = 1;
      } 
    );
  }
}
