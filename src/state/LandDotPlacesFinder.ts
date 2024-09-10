import { MathUtils } from 'three';
import { places } from '../database/places/places';
import type { Place } from '../types';

export class LandDotPlacesFinder {
  private placesAndCoordinates = new Set<{
    place: Place;
    lat: number;
    lon: number;
  }>();

  public constructor() {
    for (const place of Object.values(places)) {
      if (place.coordinates) {
        this.placesAndCoordinates.add({
          place,
          lat: MathUtils.degToRad(place.coordinates[0]),
          lon: MathUtils.degToRad(place.coordinates[1]),
        });
      }
    }
  }

  public getPlacesForDot(
    lat: number,
    toLat: number,
    lon: number,
    toLon: number,
  ): Place[] | null {
    const places: Place[] = [];

    for (const item of this.placesAndCoordinates) {
      if (
        item.lat >= lat &&
        item.lat < toLat &&
        item.lon >= lon &&
        item.lon < toLon
      ) {
        places.push(item.place);
        this.placesAndCoordinates.delete(item);
      }
    }

    if (places.length > 0) {
      return places;
    }

    return null;
  }
}
