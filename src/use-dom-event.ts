import { useEffect } from 'react';

/**
 * eventListener on the window Object
 * @example
 * useDOMEvent({
 *  target: Window;
 *  type: 'resize';
 *  listener: function() {
 *    // Code
 *  }
 * }, [dependencies])
 */
export function useDOMEvent<K extends keyof WindowEventMap>(
  options: {
    target: Window;
    type: K;
    listener: (this: Window, ev: WindowEventMap[K]) => any;
    options?: boolean | AddEventListenerOptions;
  },
  deps?: React.DependencyList,
): void;

/**
 * eventListener on the document Object
 * @example
 * useDOMEvent({
 *  target: document;
 *  type: 'click';
 *  listener: function() {
 *    // Code
 *  }
 * }, [dependencies])
 */
export function useDOMEvent<K extends keyof DocumentEventMap>(
  options: {
    target: Document;
    type: K;
    listener: (this: Document, ev: DocumentEventMap[K]) => any;
    options?: boolean | AddEventListenerOptions;
  },
  deps?: React.DependencyList,
): void;

/**
 * eventListener on the html element Object
 * @example
 * useDOMEvent({
 *  target: document.body;
 *  type: 'click';
 *  listener: function() {
 *    // Code
 *  }
 * }, [dependencies])
 */
export function useDOMEvent<K extends keyof HTMLElementEventMap>(
  options: {
    target: HTMLElement;
    type: K;
    listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any;
    options?: boolean | AddEventListenerOptions;
  },
  deps?: React.DependencyList,
): void;

/**
 * eventListener on the element Object
 * @example
 * useDOMEvent({
 *  target: document.querySelector('.class');
 *  type: 'click';
 *  listener: function() {
 *    // Code
 *  }
 * }, [dependencies])
 */
export function useDOMEvent<K extends keyof ElementEventMap>(
  options: {
    target: Element;
    type: K;
    listener: (this: Element, ev: ElementEventMap[K]) => any;
    options?: boolean | AddEventListenerOptions;
  },
  deps?: React.DependencyList,
): void;

export function useDOMEvent<K extends string>(
  {
    target,
    type,
    listener,
    options,
  }: {
    target: Window | Document | HTMLElement | Element;
    type: K;
    listener: EventListenerOrEventListenerObject;
    options?: boolean | AddEventListenerOptions;
  },
  deps?: React.DependencyList,
): void {
  useEffect(() => {
    window.addEventListener(type, listener, options);

    return (): void => {
      target.removeEventListener(type, listener, options);
    };
  }, deps || []); // eslint-disable-line react-hooks/exhaustive-deps
}
