# react-us-state-map

A React component that draws a map of US states plus DC as an SVG.  It also
provides an `onClick` event that fires when a state (or the District) is
clicked, and passes in the state (or District) two-letter abbreviation.

## Installation

```
npm i react-us-state-map
```

## Usage

```javascript
import USStateMap from 'react-us-state-map';

function handler(stateAbbreviation) {
  console.log(stateAbbreviation);
}

render() {
  return (
    <USStateMap onClick={handler} />
  );
}
```

## Styling

The map is an SVG and can be mostly styled with SVG.  There are lots of classes
applied throughout the image to help with selecting precisely the element you
want.

|CSS class|element|description|
|---------|-------|-----------|
|us-state-map|svg|The map image itself|
|outlines|g|The container for the state shapes|
|state|path|A state shape, but not DC|
|state two-letter abbreviation, uppercase|path|For each state (and DC!), the state shape (same element as the one above) has its corresponding two-letter state abbreviation (in uppercase) as a class, so you can target a specific state with something like `.us-state-map path.state.OH`|
|state|g|The container for the DC shapes|
|DC1|path|Part of the DC shape|
|DC2|circle|Another part of the DC shape|
|frames|path|The framing lines around Alaska and Hawaii|

> I'm not sure why DC is in two pieces. It's just a circle, not the actual
> shape of the District, but this way it's big enough to click.

## License

The original code in this project is released under the
[MIT license](LICENSE.md).

The SVG map is modified from
[this original](https://commons.wikimedia.org/wiki/File:Blank_US_Map_(states_only).svg)
and is released under the
[Creative Commons Attribution-Share Alike 3.0 Unported](https://spdx.org/licenses/CC-BY-SA-3.0.html).
