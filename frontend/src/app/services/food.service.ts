import { Injectable } from '@angular/core';
import { Food } from '../share/models/food';
import { sample_foods, sample_tags } from '../data';
import { Tags } from '../share/models/Tags';
import { HttpClient } from '@angular/common/http';
import { FOOD_BY_ID_URL, FOOD_BY_SEARCH_URL, FOOD_BY_TAGS_URL, FOOD_TAGS_URL, FOOD_URL } from '../share/constants/urls';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getAll(): Observable<Food[]> {
    return this.http.get<Food[]>(FOOD_URL);
  }

  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tags[]> {
    return this.http.get<Tags[]>(FOOD_TAGS_URL);
  }

  getAllFoodsByTag(tag: string): Observable<Food[]> {
    return tag === "All" ?
      this.getAll() :
      this.http.get<Food[]>(FOOD_BY_TAGS_URL + tag);
  }

  getFoodById(foodId:string):Observable<Food>{
    return this.http.get<Food>(FOOD_BY_ID_URL + foodId);
  }

}