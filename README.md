<div align="center">
  <h1>
    <br/>
    <br/>
    use-dom-event
    <br />
    <br />
    <br />
    <br />
  </h1>
  <sup>
    A <a href="https://reactjs.org/docs/hooks-intro.html">React Hook</a> for DOM Events.</em>
    <em>Brought to you by </em> <a href="https://www.zorillamedia.com"><code>Zorilla</code></a>.
  </sup>
  <br />
  <br />
  <br />
  <br />
  <pre>npm i --save <a href="https://www.npmjs.com/package/use-dom-event">use-dom-event</a></pre>
  <br />
  <br />
  <br />
  <br />
  <br />
</div>

## Table of content

> Please let me know, if I forgot something below.

- [Table of content](#table-of-content)
- [Installation](#installation)
- [Usage](#usage)
  - [Window Object](#window-object)
  - [DOM Document Object](#dom-document-object)
  - [DOM Element Object](#dom-element-object)
  - [DOM Element Object within React RefObject](#dom-element-object-within-react-refobject)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)
- [Links](#links)

## Installation

> To get started just enter de following command and you're good to go.

    npm install use-dom-event

## Usage

You can use this React Hook with Window Object or any other HTML DOM Object. This Hooks works very similarly to useEffect Hook. When no dependecies provided, the event will be removed after the components unmounts. Otherwise the event will be removed and added again from the target object, whenever one of the dependencies provided change. The hook uses `addEventlistener` and `removeEventlistener` under the hood.

### Window Object

```javascript
import useDOMEvent from 'use-dom-event';

function MyComponent () {

  useDOMEvent(
    {
      target: Window,
      type: 'resize',
      // the event param here is automatically typed as UIEvent
      listener: function(event) {
        // console.log(window.innerWidth)
      }
    },
    [] // optional array of dependencies just like useEffect Hook
  );

  return <div>MyComponent</div>
}
```

### DOM Document Object

```javascript
import useDOMEvent from 'use-dom-event';

function MyComponent () {

  useDOMEvent(
    {
      target: document,
      type: 'click',
      // the event param here is automatically typed as MouseEvent
      listener: function(event) {
        // console.log(window.innerWidth)
      }
    },
    [] // optional array of dependencies just like useEffect Hook
  );

  return <div>MyComponent</div>
}
```
### DOM Element Object

```javascript
import useDOMEvent from 'use-dom-event';

function MyComponent () {

  useDOMEvent(
    {
      target: document.body,
      type: 'mouseenter',
      // the event param here is automatically typed as MouseEvent
      listener: function(event) {
        // console.log(window.innerWidth)
      }
    },
    [] // optional array of dependencies just like useEffect Hook
  );

  return <div>MyComponent</div>
}
```

### DOM Element Object within React RefObject

When using `dangerouslySetInnerHTML`, you cannot set eventListeners using JSX. In that case you may want to use React RecObject to add event listeners to a particular element.

```javascript
import { useRef } from 'react';
import useDOMEvent from 'use-dom-event';

function MyComponent () {
  const RefElement = useRef(null);

  useDOMEvent(
    {
      // when using the hook in a typescript project you may get an error
      // telling you `RefElement.current` is `undefined`. In that case just
      // define the target it as following:
      // `(RefElement.current as HTMLDivElement).querySelector('button')`
      target: RefElement.current.querySelector('button'),
      type: 'mouseenter',
      // the event param here is automatically typed as MouseEvent
      listener: function(event) {
        // console.log(window.innerWidth)
      }
    },
    [] // optional array of dependencies just like useEffect Hook
  );

  return <div ref={RefElement} dangerouslySetInnerHTML={{ __html: '<button>Inner Button</button>' }} />
}
```

## API
## Contribute
## License
## Links