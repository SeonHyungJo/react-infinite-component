<p align="center">
    <a href="https://seonhyungjo.github.io/react-intinite-component/"><img width="140" src="./static/infinite-logo.png" alt="React Infinite Scroll Component"/></a>

<h1 align="center">React Infinite Scroll Component</h1>

<div align="center">

[![NPM](https://img.shields.io/npm/v/react-infinite-component.svg)](https://www.npmjs.com/package/react-infinite-component) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<img width="100%" border="1px solid black" src="./static/infinite-example.gif" alt="React Infinite Scroll Component"/>

</div>

## Install

```bash
npm install --save react-infinite-component
```

## Usage

```tsx
import * as React from 'react'

import MyComponent from 'react-infinite-component'

class Example extends React.Component {
  render () {
    return (
      <InfiniteScroll loadingFunc={() => fetchDate()} hasMore={this.state.moreFlag} loader={<h4>로딩 중...</h4>}>
          <img src='https://images.unsplash.com/photo-1578763713067-ab058f88be3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
          <img src='https://images.unsplash.com/photo-1578483001364-b508612cde4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
      </InfiniteScroll>
    )
  }
}
```

## License

MIT © :mouse:[snyung](https://github.com/seonhyungjo)
