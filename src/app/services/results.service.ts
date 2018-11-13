import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Driver} from '../model/driver';
import {Result} from '../model/result';
import {Circuit} from "../model/circuit";
import {ResultsDTO} from "../model/resultsDTO";

@Injectable()
export class ResultsService {

  private _urlPrefix: string = 'http://localhost:8080/JAX-RX-1.0-SNAPSHOT/';

  constructor(private http: HttpClient) {
  }

  findAllDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(this._urlPrefix + 'api/drivers');
  }

  findDriver(id: number): Observable<Driver> {
    return this.http.get<Driver>(this._urlPrefix + `api/drivers/${id}`);
  }

  removeDriver(driver: Driver): Observable<any> {
    return this.http.delete(this._urlPrefix + `api/drivers/${driver.id}`);
  }

  saveDriver(driver: Driver): Observable<any> {
    if (driver.id) {
      return this.http.put(this._urlPrefix + `api/drivers/${driver.id}`, driver);
    } else {
      return this.http.post(this._urlPrefix + 'api/drivers/', driver);
    }
  }

  findAllResults(): Observable<ResultsDTO> {
    return this.http.get<ResultsDTO>(this._urlPrefix + 'api/results');
  }

  findResults(resourceUri: string = this._urlPrefix + 'api/results?limit=10&offset=0'): Observable<ResultsDTO> {
    let results: Observable<ResultsDTO> = this.http.get<ResultsDTO>(resourceUri);

    return results;
    // return results.subscribe(resultsList => results.)
  }

  findResult(id: number): Observable<Result> {
    return this.http.get<Result>(this._urlPrefix + `api/results/${id}`);
  }

  removeResult(result: Result): Observable<any> {
    return this.http.delete(this._urlPrefix + `api/results/${result.id}`);
  }

  saveResult(result: Result): Observable<any> {
    if (result.id) {
      return this.http.put(this._urlPrefix + `api/results/${result.id}`, result);
    } else {
      return this.http.post(this._urlPrefix + 'api/results/', result);
    }
  }

  findAllCircuits(): Observable<Circuit[]> {
    return this.http.get<Circuit[]>(this._urlPrefix + 'api/circuits');
  }

  findCircuit(id: number): Observable<Circuit> {
    return this.http.get<Circuit>(this._urlPrefix + `api/circuits/${id}`);
  }

  removeCircuit(circuit: Circuit): Observable<any> {
    return this.http.delete(this._urlPrefix + `api/circuits/${circuit.id}`);
  }

  saveCircuit(circuit: Circuit): Observable<any> {
    if (circuit.id) {
      return this.http.put(this._urlPrefix + `api/circuits/${circuit.id}`, circuit);
    } else {
      return this.http.post(this._urlPrefix + 'api/circuits/', circuit);
    }
  }
}
