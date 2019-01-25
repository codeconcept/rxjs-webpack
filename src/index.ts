import { Observable } from 'rxjs';

const myList = document.querySelector('#my-list');

const render = value => {
    const li = document.createElement('li');
    const text = document.createTextNode(value);
    li.appendChild(text);
    myList.appendChild(li);
};

const source$ = Observable.create(observer => {
    observer.next('Hello');
    observer.next('World');
    observer.next(':)');
    // observer.error('boom');
    observer.complete();
    observer.next('too late :(');
});

source$.subscribe(
  value => console.log(`value is ${value}`),
  error => console.error(`error: ${error}`),
  () => console.log('completed')
);

source$.subscribe(
    value => render(value),
    error => render ('error: ' + error),
    () => render('completed')
);
