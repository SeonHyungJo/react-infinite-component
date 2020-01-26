import React, { Component } from 'react'

import InfiniteScroll from 'react-infinite-component'
import LazyImg from 'react-lazy-loading-image'
import { fetchData } from './util'

const ITEM_START_IDX = 4
const ITEM_LIMIT = 5



export default class App extends Component {
  state = {
    startIdx: ITEM_START_IDX,
    itemList: [],
    moreFlag: true
  }

  handleLoading = () => {
    setTimeout(() => {
      const newItemList = fetchData(this.state.startIdx, ITEM_LIMIT)

      this.setState((prevState) => {
        return {
          ...prevState,
          startIdx: prevState.startIdx + ITEM_LIMIT,
          itemList: [...prevState.itemList, ...newItemList],
          moreFlag: !(newItemList.length < ITEM_LIMIT)
        }
      })
    }, 0)
  }

  render() {
    return (
      <div>
        <InfiniteScroll loadingFunc={this.handleLoading} hasMore={this.state.moreFlag} loader={<h4>로딩 중...</h4>}>
          <img src='https://images.unsplash.com/photo-1578763713067-ab058f88be3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
          <img src='https://images.unsplash.com/photo-1578483001364-b508612cde4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
          <img src='https://images.unsplash.com/photo-1579783135819-bbc4905aa3a5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
          <img src='https://images.unsplash.com/photo-1578763713067-ab058f88be3a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
          <img src='https://images.unsplash.com/photo-1578483001364-b508612cde4a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
          <img src='https://images.unsplash.com/photo-1579783135819-bbc4905aa3a5?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixlib=rb-1.2.1&q=80&w=400' className={"innerDiv"} />
          {
            this.state.itemList.map((item) => {
              return (
                <LazyImg key={item.id} className="innerDiv" src={item.src} />
              )
            })
          }
        </InfiniteScroll>
      </div>
    )
  }
}
