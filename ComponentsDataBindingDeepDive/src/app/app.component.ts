import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server' , name: 'Testserver', content: 'Just a test'}];

  onServerAdded(serverData: {serverName: string,serverContent:string}){
    this.serverElements.push({
      type:'server',
      name: serverData.serverName,
      content: serverData.serverContent
    })

  }

  onBlueprintAdded(Blueprint: {serverName: string,serverContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name: Blueprint.serverName,
      content: Blueprint.serverContent
    })
  }
 
 /* Test(event: Event){
    console.log(event);

  }*/

}
