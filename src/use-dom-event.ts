import { useEffect } from 'react';

export function useDOMEvent<K extends keyof WindowEventMap>(
  options: { target: Window; type: K; listener: (this: Window, ev: WindowEventMap[K]) => any },
  deps?: React.DependencyList,
): void;

export function useDOMEvent<K extends keyof DocumentEventMap>(
  options: { target: Document; type: K; listener: (this: Document, ev: DocumentEventMap[K]) => any },
  deps?: React.DependencyList,
): void;

export function useDOMEvent<K extends keyof HTMLElementEventMap>(
  options: { target: HTMLElement; type: K; listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any },
  deps?: React.DependencyList,
): void;

export function useDOMEvent<K extends keyof ElementEventMap>(
  options: { target: Element; type: K; listener: (this: Element, ev: ElementEventMap[K]) => any },
  deps?: React.DependencyList,
): void;

export function useDOMEvent<K extends string>(
  {
    target,
    type,
    listener,
  }: { target: Window | Document | HTMLElement | Element; type: K; listener: EventListenerOrEventListenerObject },
  deps?: React.DependencyList,
): void {
  useEffect(() => {
    target.addEventListener(type, listener);

    return (): void => {
      target.removeEventListener(type, listener);
    };
  }, deps || []); // eslint-disable-line react-hooks/exhaustive-deps
}
