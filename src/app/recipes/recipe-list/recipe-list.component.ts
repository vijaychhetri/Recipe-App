import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [{name: 'Sample Recipe 1', description:'This is a sample',imagePath:'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'},
  {name: 'Sample Recipe 2', description:'This is a sample',imagePath:'https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/12/Shakshuka-19.jpg'}];
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(recipe: Recipe) {
    this.selectedRecipe.emit(recipe);
  }
}
