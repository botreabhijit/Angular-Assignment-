import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Message:string;
  // String that we want to send to the child component
public message2 = "Hello from Child";
  
}
