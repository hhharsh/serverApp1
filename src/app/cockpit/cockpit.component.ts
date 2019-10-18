import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
 export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  //newServerName = 'h1';
  newServerContent = 'h2';
  //@ViewChild('serverContentInput') serverContentInput: ElementRef;
  // [qq]="newServerName"
  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
     
      // serverContent: this.serverContentInput.nativeElement.value

      // serverName: this.newServerName,
      serverName: nameInput.value,
      serverContent: this.newServerContent 
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
     
  //     serverContent: this.serverContentInput.nativeElement.value

     // serverName:  this.newServerName,
     serverName: nameInput.value,
      serverContent: this.newServerContent 
    });
  }
 }

