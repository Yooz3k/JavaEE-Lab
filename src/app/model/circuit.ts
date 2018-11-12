export class Circuit {
  id : number;
  name: string;
  country: string;
  hostsStreetRace: boolean;
  hostsNightRace: boolean;

  constructor() {
    this.id = null;
    this.name = '';
    this.country = '';
    this.hostsStreetRace = false;
    this.hostsNightRace = false;
  }
}
