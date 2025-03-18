import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private apiUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) { // Verifica si estás en el navegador
      this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser') || 'null'));
    } else {
      this.currentUserSubject = new BehaviorSubject<any>(null); // Establece un valor predeterminado si no estás en el navegador
    }
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password })
      .pipe(map(user => {
        if (isPlatformBrowser(this.platformId)) { // Verifica si estás en el navegador
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) { // Verifica si estás en el navegador
      localStorage.removeItem('currentUser');
    }
    this.currentUserSubject.next(null);
  }

  isLoggedIn(): boolean {
    return this.currentUserValue !== null;
  }

  register(email: string, password: string, name: string, password_confirmation: string): Observable<any>{
    const url = 'http://127.0.0.1:8000/api/register'

    const userData = {
      name: name,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    };
    
    return this.http.post(url, userData).pipe(
      catchError(error => {
        console.error('Error en el registro:', error);
        return throwError(() => error);
      })
    )
  }
}