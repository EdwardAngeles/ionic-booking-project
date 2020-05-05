import { Injectable } from '@angular/core';
import { Place } from '../models/place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  
  private _places: Place[] = [
    new Place(
      'p1',
      'Manhattan Mansion',
      'In the heart of New York City',
      'https://imgs.6sqft.com/wp-content/uploads/2014/06/21042533/Carnegie-Mansion-nyc.jpg',
      149.99
    ),
    new Place(
      'p2',
      'Eiffel Tower',
      'A tower on the Champ de Mars in Paris, France',
      'https://media.tacdn.com/media/attractions-splice-spp-674x446/06/74/aa/fc.jpg',
      189.99
    ),
    new Place(
      'p3',
      'The Foggy Palace',
      'A tower on the Champ de Mars in Paris, France',
      'https://i.pinimg.com/originals/65/8f/77/658f77b9b527f89922ba996560a3e2b0.jpg',
      99.99
    )
  ];
  
  get places() {
    return [...this._places];
  }
  
  constructor() { }
  
  getPlace(id: string): Place {
    const place =  this._places.find((place) => place.id === id);
    return {...place};
  }
}
