import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000'; // Asegúrate de que la URL coincida con tu entorno de backend

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { correo: username, contrasena: password });
  }

  handleAuthentication(token: string, tipo_usuario: string): void {
    sessionStorage.setItem('token', token); // Guarda el token en localStorage
    // Redireccionar según el tipo de usuario
    sessionStorage.setItem('tipoUsuario', tipo_usuario);
    if (tipo_usuario === 'Superadmin') {
      this.router.navigate(['/superadmin']);
    } else if (tipo_usuario === 'Juez') {
      this.router.navigate(['/juez']);
    } else if (tipo_usuario === 'Oficial') {
      this.router.navigate(['/perfil-vehicular']);
    }
  }
}
