import { Injectable } from '@angular/core';
import { Food } from '../share/models/food';
import { sample_foods, sample_tags } from '../data';
import { Tags } from '../share/models/tags';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Food[]{
    return sample_foods;
  }

  getAllFoodsBySearchTerm(searchTerm:string){
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  getAllTags() : Tags[]{
    return sample_tags;
  }

  getAllFoodByTags(tag:string):Food[]{
    return tag == "All" ? this.getAll() : this.getAll().filter(food => food.tags?.includes(tag));
  }

  getFoodById(foodId : string) : Food{
    return this.getAll().find(food => food.id == foodId) ?? new Food();
  }

}
