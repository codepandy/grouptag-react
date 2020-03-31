import React from "react";
import ReactDOM from "react-dom";
import GroupTag from "../index";
import styles from "./index.less";

const { TagItem } = GroupTag;

function onClickItem(item) {
  console.log(JSON.stringify(item));
}

function Main() {
  return (
    <section>
      <GroupTag
        value={["1", "2"]}
        source={[
          { id: "1", name: "电脑" },
          { id: "2", name: "水杯" },
          { id: "3", name: "冰箱" },
          { id: "4", name: "充电器" },
          { id: "5", name: "其他" },
        ]}
        onClick={onClickItem}
      />

      <GroupTag
        isSingle={true}
        onClick={onClickItem}
        source={[
          { id: 0, name: "电脑" },
          { id: 2, name: "水杯" },
          { id: 3, name: "冰箱" },
          { id: 4, name: "充电器" },
          { id: 5, name: "其他" },
        ]}
      />

      <GroupTag isSingle={true} onClick={onClickItem}>
        <TagItem value="a" className={styles.item}>
          电脑
        </TagItem>
        <TagItem value="b" style={{ color: "red" }}>
          水杯
        </TagItem>
        <TagItem value="c">冰箱</TagItem>
        <TagItem value="d">充电器</TagItem>
      </GroupTag>
    </section>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
