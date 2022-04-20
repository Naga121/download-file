import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {

  constructor(private http:HttpClient,) { }
  public dlFile(){

  }
}
