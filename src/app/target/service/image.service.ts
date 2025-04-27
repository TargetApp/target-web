import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  private baseURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  sendImageAsync(image: FormData) {
    return this.http.post(`${this.baseURL}/TargetImagem/imagem`, image)
  }
}
