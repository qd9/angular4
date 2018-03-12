import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef, ContentChild } from '@angular/core';
// import { ContentChild } from '@angular/core/src/metadata/di';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.css']
})

export class AddListComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() bluepointCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @ViewChild('newServerContent') newServerContent: ElementRef;
  @ContentChild('paraContent') paraContent: ElementRef;

  ngOnInit() {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    console.log(this.newServerContent); // ElementRef{ nativeElement : ....}
    // 不要用这种方法change dom，不好。
    this.serverCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluepointCreated.emit({
      serverName: serverNameInput.value,
      serverContent: this.newServerContent.nativeElement.value
    });
  }
}
