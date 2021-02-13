import { Point, GeoJsonObject, Position } from 'geojson';
export class Place {
  id: string;
  href: string;
  name: string;
  description: string;
  location: {
    type: Point;
    coordinates: Position;
}; // GeoJsonPoint
  tripId: string;
  tripHref: string;
  pictureUrl: string ;
  createdAt: Date;
  updatedAt: Date;
  }
