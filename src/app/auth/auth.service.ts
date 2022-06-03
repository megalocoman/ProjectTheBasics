import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';


interface AuthResponseData{

  idToken	:string;
  email	:string	;
  refreshToken :string;
  expiresIn	:string;
  localId	:string	;

}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  signUp(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMsmF1QWj-zDg6-vqyek2B519C_ew3zVE',
      {
        email: email,
        password: password,
        returnSecureToken: true
      }
    ).pipe(catchError(errorRes => {
      let errorMessage =  ' an unknown error occured!';

      if(!errorRes.error || !errorRes.error.error){
        return throwError(errorMessage);
      }

      switch(errorRes.error.error.message){
        case "EMAIL_EXISTS":
          errorMessage = 'user email already exists'
          break;
      }
      return throwError(errorMessage);
    }));
  }
}
