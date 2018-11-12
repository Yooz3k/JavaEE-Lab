import {Circuit} from "./circuit";

export class Result {
  id: number;
  pos: number;
  gapToLeader: number;
  pitStops: number;
  didFinish: boolean;
  circuit: Circuit;

  constructor() {
    this.id = null;
    this.pos = 0;
    this.gapToLeader = 0.000;
    this.pitStops = 0;
    this.didFinish = false;
    this.circuit = null;
  }
}
