import {Result} from "./result";

export class Driver {
  id: number;
  firstName: string;
  secondName: string;
  nationality: string;
  team: string;
  dateOfBirth: Date;
  wasWorldChampion: boolean;
  results: Result[];

  constructor() {
    this.id = null;
    this.firstName = '';
    this.secondName = '';
    this.nationality = '';
    this.team = '';
    this.dateOfBirth = null;
    this.wasWorldChampion = false;
    this.results = [];
  }
}
