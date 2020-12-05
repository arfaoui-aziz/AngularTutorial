import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
  // encapsulation: ViewEncapsulation.Emulated  , None , Native
  // Emulated is the default we don't need to add it
  // None  don't add any attribute to the elements . css changes are applied globally
  /* Native uses the shadow dom technologie give the same results as Emulated but 
  only with browsers that support it */
})
export class ServerElementComponent implements OnInit {
 
 @Input() element: {type: string , name: string, content: string};

 //bind through an alias
 //@Input('srvElement') element: {type: string , name: string, content: string};

 
  constructor() { }

  ngOnInit(): void {
  }

}
