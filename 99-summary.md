# JavaScript

## Types

[JS Comparison Table](https://dorey.github.io/JavaScript-Equality-Table/)

## Scope, Closure, Hoisting, Execution Context

Visualize execution context, scope & closure with [https://tylermcginnis.com/javascript-visualizer/](https://tylermcginnis.com/javascript-visualizer/)

## Event loop

[Visualize event loop](https://www.jsv9000.app/)

# Clean Code

## Declarative Programming

[Array methods at MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

## Best practices

💡 Rule of thumb: **Good code is adaptable code**, following best practices can help but don't sacrifice adaptability for clean code principles and overengineering in abstractions.

- Immutability
- Pure, reusable functions
- Duplication
- Single Responsibility
- Declarative programming
- Tools (ESLint, Prettier)
- MCETMEC: Make Change Easy, Then Make Easy Change

# TypeScript

- TypeScript Driven Development: Model before Implementation

- Opaque / Nominal types:

```typescript
const tag = Symbol("__TYPE__");
type Opaque<K, T> = T & { readonly [tag]: K };

type UserId = Opaque<"UserId", number>;

const createUserId = (id: number): UserId => {
  return id as UserId;
};
```

- Type predicates:

```typescript
type Person = {
  name: string;
  age: number;
};

type Animal = {
  species: string;
};

function isPerson(obj: any): obj is Person {
  return (
    (obj as Person).name !== undefined && (obj as Person).age !== undefined
  );
}
```

- Generics: If possible, pick a longer name for generics. Instead of `<T>` use `<TValue>`

- Extra utilities

```typescript
// ThenArg
type ThenArg<T> = T extends PromiseLike<infer U> ? U : T;
type timings = ThenArg<ReturnType<typeof getSessions>>;

// Maybe
type Maybe<T> = T | undefined | null;
type Person = {
  name: string;
  age: Maybe<number>;
};
```

- Prefer @ts-expect-error above @ts-ignore

# React

- In depth articles and explanations: [https://overreacted.io/](https://overreacted.io/)

- [https://usehooks.com/](https://usehooks.com/)

- [Examples during course: https://codesandbox.io/p/sandbox/myz93z](https://codesandbox.io/p/sandbox/myz93z)

💡 What’s a good value for a key? An easy way to answer this is to ask: when would you say an item is the “same” even if the order changed?

💡 Components should be resilient to rendering less or more often because otherwise they’re too coupled to their particular parents: Example: https://codesandbox.io/p/sandbox/m3w9zn1z8x?file=/index.js:35,5

💡 React.memo shouldn’t be used for controlling behavior. Only use them to improve performance where it helps. If removing an optimization breaks a component, it was too fragile to begin with.

💡 It’s a good idea to do stress test complex components once in a while by ensuring that multiple copies of them don’t conflict with one another.

💡 If you’re not sure whether some state is local, ask yourself: “If this component was rendered twice, should this interaction reflect in the other copy?” Whenever the answer is “no”, you found some local state.

💡 If you’re trying to write an effect that behaves differently depending on whether the component renders for the first time or not, you’re swimming against the tide!

💡 The previous effect is cleaned up after the re-render with new props

💡 useReducer is the “cheat mode” of Hooks. It lets you decouple the update logic from describing what happened. This helps to remove unnecessary dependencies from effects.

💡 Prefer update functions in useState (instead of expressions), or useReducer

Possible ways of fixing unnecessary useEffect calls because of object dependencies:

```javascript
// OK, but gives ESLint warning that `filters` is missing in the dependency array
[...Object.values(filters)];

// Can be a lot of typing to pass all properties of an object + not always possible (e.g. nested objects)
const { brand, color } = filters;
[brand, color];

// A lot slower
const json = JSON.stringify(filters);
useEffect(() => {
  const filters = JSON.parse(json);
  console.log(filters);
}, [json]);
```
