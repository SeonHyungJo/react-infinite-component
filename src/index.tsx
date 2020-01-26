import React from "react";
import usrIntersect from "use-intersect";

import styles from "./styles.css";

export type Props = {
  loadingFunc: Function;
  hasMore: boolean;
  id?: string;
  className?: string;
  style?: object;
  loader?: Element;
  children?: React.ReactNode;
};

const defaultLoader = "Loading....";

const InfiniteScroll = ({
  loadingFunc,
  hasMore = false,
  id,
  className,
  style,
  loader: customLoader,
  children
}: Props) => {
  const infiniteDiv = hasMore
    ? usrIntersect(loadingFunc, { once: false })
    : null;
  const loader = customLoader || defaultLoader;

  return (
    <div id={id} className={className || styles.defaultInfinite} style={style}>
      {children}
      {hasMore && <div ref={infiniteDiv}>{loader}</div>}
    </div>
  );
};

export default InfiniteScroll;
