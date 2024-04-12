import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockService {
  apiUrl: string = 'https://fakestoreapi.com/users';
  private listSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private list: any = [];

  constructor(private http: HttpClient) {
    this.initilizeList();
  }

  initilizeList() {
    this.http.get(this.apiUrl).subscribe((resp) => {
      this.list = resp;
      this.listSubject.next(resp);
    });
  }

  getAllUsers(): Observable<any> {
    return this.listSubject.asObservable();
  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deteleUser(id: number): Observable<any> {
    this.list = this.list.filter((user: { id: number }) => user.id !== id);
    // return this.http.delete(`${this.apiUrl}/${id}`);
    this.listSubject.next(this.list);
    return of({});
  }

  updateUser(newData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${newData.id}`, newData);
  }
}
