import './c.css';
import './b';
import './a';

import('./async_module').then(content => console.log(content));

console.log('hello-world');
