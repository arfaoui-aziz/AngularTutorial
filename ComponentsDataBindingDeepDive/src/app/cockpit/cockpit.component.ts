import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {


//

//Declaration of Output Property (Event) 
// NameOfEvent = new EventEmitter <Type of informations sent to the parent Component when the event is launched >()
//expose them to the Parent Component by adding the Decorator @Output()

  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string }>();

  newServerName = '';
  newServerContent = '';

  @ViewChild('InputServerName')   serverNameInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

// if addServer Button is pressed we're going to Emit(launch) the Event Created(informations to send to the parent Component) 
  onAddServer() {
  this.serverCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
      serverName: this.newServerName,
      serverContent: this.newServerContent
    });
  }

}
