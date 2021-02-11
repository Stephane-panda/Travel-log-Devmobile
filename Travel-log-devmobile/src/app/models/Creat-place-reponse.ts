export class CreateplaceResponse {
  id: string;
  href: string;
  name: string;
  description: string;
  location: string; // GeoJsonPoint
  tripId: string;
  tripHref: string;
  pictureUrl: string ;
  createdAt: Date;
  updatedAt: Date;
}
