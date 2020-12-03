import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  // type array of recipe
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test','https://www.goodfood.com.au/content/dam/images/h/1/o/t/k/m/image.related.wideLandscape.380x214.h1l6sj.h0j4ha.png/1606134592099.jpg' ),
    new Recipe('A tdfe', 'This is simply af test','https://www.goodfood.com.au/content/dam/images/h/1/o/t/k/m/image.related.wideLandscape.380x214.h1l6sj.h0j4ha.png/1606134592099.jpg' )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
