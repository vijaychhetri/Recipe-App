import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from './can-deactivate.guard.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit, CanComponentDeactivate {

  constructor() { }
  

  ngOnInit(): void {
  }
  canDeactivate(): boolean | Promise<boolean> | Observable<boolean> {
    return confirm('Do you want to leave.');
  }
}
