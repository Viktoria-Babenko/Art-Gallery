import {Component, OnInit, ViewChild, Output, EventEmitter} from '@angular/core';
import {DataService} from './data.service';
import { DataComponent} from "./data.component"
import {Painting} from './Painting';

@Component({
    selector: 'my-app',
    template: `<div class="div">
                  <div *ngFor="let painting of paintings; let i = index" >
                    <img class="input" src="{{painting.image}}" (click)="onSelect(i)" >
                  </div>
               </div>
               <data-comp ></data-comp>`,
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit { 
    
    @ViewChild(DataComponent)
    private paint: DataComponent;

    paintings: Painting[] = [];

    constructor(private dataService: DataService){}
    @Output() onChanged = new EventEmitter<number>();
    ngOnInit(){
        this.paintings = this.dataService.getData();
    }
    onSelect(p : any ){

        this.paint.SetContmp(this.paintings[p]);
    }
}
