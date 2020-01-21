import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe("Pumpkin Soup", "An awesome pumpkin soup.", "http://assets.kraftfoods.com/recipe_images/89488-89489.jpg"),
    new Recipe("Orange Soup", "An awesome orange soup.", "http://assets.kraftfoods.com/recipe_images/89488-89489.jpg"),
    new Recipe("Havtorn Soup", "An awesome havtorn soup.", "http://assets.kraftfoods.com/recipe_images/89488-89489.jpg"),
  ];

  constructor() { }

  ngOnInit() {
  }

}
