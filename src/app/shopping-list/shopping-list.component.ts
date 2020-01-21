import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient("Pumpkin", 1),
    new Ingredient("Cream", 2),
    new Ingredient("Sesame Seeds", 10),
  ];

  constructor() { }

  ngOnInit() {
  }

}
