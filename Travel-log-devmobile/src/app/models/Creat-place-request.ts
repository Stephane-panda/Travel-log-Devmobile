export class CreatePlaceRequest {
  name: string;
  description: string;
  location: string; // GeoJsonPoint
  tripHref: string;
  tripId: string;
  pictureUrl: string;
}
