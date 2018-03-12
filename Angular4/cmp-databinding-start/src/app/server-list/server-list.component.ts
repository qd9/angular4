// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, ViewEncapsulation, OnChanges, SimpleChanges, DoCheck, ViewChild, AfterViewInit, ElementRef} from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { ContentChild } from '@angular/core/src/metadata/di';
// import { ElementRef } from '@angular/core/src/linker/element_ref';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated, // None, Native.
})
export class ServerListComponent implements OnInit, OnChanges, DoCheck, OnDestroy, AfterViewInit {
@Input('serverElement') element: string;
@Input() name: string;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngInit');
  }

  ngOnChanges(changes: SimpleChanges) {
    // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    // Add '${implements OnChanges}' to the class.
    console.log(changes);
  }

  ngDoCheck() {
    // tslint:disable-next-line:max-line-length
    // Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    // Add 'implements DoCheck' to the class.
    console.log('Docheck');
  }

  ngAfterViewInit() {
    // Called after ngOnInit when the component's or directive's content has been initialized.
    // Add 'implements AfterContentInit' to the class.
    // console.log('After viewinit: ' + this.header.nativeElement.textContent);
  }

  ngOnDestroy() {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    console.log('destory');
  }
}
