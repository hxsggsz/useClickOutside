## useClickOutside custom hook
a simple custom hook to check when the user click outside an specified component

## Installation
Install it from npm with your favorite package manager!

```bash
npm install use-awesome-click-outside
```
or:
```bash
yarn add use-awesome-click-outside
```
or:
```bash
pnpm install use-awesome-click-outside
```

## usage
```ts
   import { useClickOutside } from 'use-awesome-click-outside';

   export const Component = () => {
   // pass the type of the HTML you will use here!
   const ref = useClickOutside<HTMLDivElement>((ev) => console.log('clicked outside!', ev));
   return (
    <div ref={ref}>
      <h1>Hello World! 🫡</h1>
    </div>
  );
};
 ```

 ## Deep into the hook
 this hook return the ref that you will need to pass on your html, this ref will check if the user is clicking outside the HTML, if it is re will call the function that you pass as parameter