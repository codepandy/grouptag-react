import React from "react";
import ReactDOM from "react-dom";
import GroupTag from "../index";

function Main() {
  return (
    <section>
      <GroupTag
        source={[
          { id: "1", name: "电脑" },
          { id: "2", name: "水杯" },
          { id: "3", name: "冰箱" },
          { id: "4", name: "充电器" },
          { id: "5", name: "其他" },
        ]}
      />

      <GroupTag
        isSingle={true}
        source={[
          { id: "1", name: "电脑" },
          { id: "2", name: "水杯" },
          { id: "3", name: "冰箱" },
          { id: "4", name: "充电器" },
          { id: "5", name: "其他" },
        ]}
      />
    </section>
  );
}

ReactDOM.render(<Main />, document.getElementById("root"));
