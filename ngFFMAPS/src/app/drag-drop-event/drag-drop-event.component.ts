import { Component, OnInit } from '@angular/core';
//import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-drag-drop-event',
  templateUrl: './drag-drop-event.component.html',
  styleUrls: ['./drag-drop-event.component.css']
})
export class DragDropEventComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
    let reactionTags = document.getElementById("layoutReaction").children;
    let transformList = document.getElementById("transforms");
    transformList.innerHTML=""
    for(let i :number = 0; i<actionTags.length; i++){
      let transform = actionTags[i].style.transform;
      let xdim = "" + actionTags[i].style.transform.substr(12);
      xdim = xdim.substring(0, xdim.search("p"));
      console.log(xdim);
      reactionTags[i].style.transform = transform;
      transformList.innerHTML += "<p>"+transform + "</p>";
    }
  }
}
