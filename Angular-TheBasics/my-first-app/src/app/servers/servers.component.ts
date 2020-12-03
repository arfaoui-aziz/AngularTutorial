import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
allowNewServer = false ;
serverCreationStatus = 'No server was created';
serverCreated= false;
serverName : string = 'Test';
username : string ='';
servers = ['TestServer', 'Testserver2'];

clickNbr = 0;
displayBtnClicked = false;
btnClicks = [];
  constructor() { 
    // enable the button after 2 second
setTimeout(() => {
  this.allowNewServer = true
},2000)

  }


  ngOnInit(): void {
  }
onCreateServer(){

  this.serverCreationStatus = ' Server was Created! Name is '+ this.serverName;
  this.servers.push(this.serverName);
  this.serverCreated = true

}

onUpdateServerName(event: Event){
  /* console.log(event)
this.serverName = (<HTMLInputElement>event.target).value*/
}
 
usernameIsEmpty(){
  if (this.username.length === 0 )
  return true;
  else return false;
}

btnIsClicked() {
this.displayBtnClicked = true;
this.clickNbr++;
  this.btnClicks.push(this.clickNbr);
  // this.btnClicks.push(this.btnClicks.length + 1 );
  // nekdhou length mtaa el tab bech nincremontiw beha
}
}
