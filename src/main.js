// import foo from './foo.js';
// export default function () {
//   console.log(foo);
// }

// import { version } from '../package.json';

// export default function () {
//   console.log('version ' + version);
// }
export default function () {
  import('./foo.js').then(({ default: foo }) => console.log(foo));
}