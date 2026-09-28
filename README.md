# open.event-emitter

Minimal dependency-free event emitter with on, once, off, emit, and listener inspection.

## Install

```bash
npm install @journey-to-code/open-event-emitter
```

## Usage

```js
const events = new EventEmitter();
const off = events.on("change", value => console.log(value));
events.emit("change", 42);
off();
```

## Runtime

- Node.js 18+
- modern ESM-capable tooling
- zero runtime dependencies

## Development

```bash
npm test
```

## Scope

This package intentionally focuses on one small, reusable responsibility.
Application-specific behavior belongs in higher-level packages.

## License

MIT
