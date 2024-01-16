import { Injectable, inject } from '@angular/core';
import { Messaging, getToken, onMessage } from '@angular/fire/messaging';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FireMessagingService {
  private readonly _messaging = inject(Messaging);

  private readonly _message = new BehaviorSubject<any | undefined>(undefined);
  message$ = this._message.asObservable();

  requestPermission() {
    getToken(this._messaging)
      .then((currentToken) => {
        if (currentToken) {
          console.log('Hurraaa!!! we got the token.....');
          console.log(currentToken);
        } else {
          console.log(
            'No registration token available. Request permission to generate one.'
          );
        }
      })
      .catch((err) => {
        console.log('An error occurred while retrieving token', err);
      });
  }

  listen() {
    onMessage(this._messaging, {
      next: (payload) => {
        console.log('Message received', payload);
        this._message.next(payload);
      },
      error: (error) => {
        console.log('Message error', error);
      },
      complete: () => {
        console.log('Done listening to messages');
      },
    });
  }
}
