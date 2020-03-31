# grouptag-react

定义一组选中标签，可以单选也可以多选

## 效果图

![WX20200330-171105@2x.png](https://i.loli.net/2020/03/30/2f6yTezxahA9j7W.png)

## demo

```js
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
```

## 参数说明

| 参数      | 说明                                         | 默认值     |
| --------- | :------------------------------------------- | :--------- |
| value     | 选中的值                                     | []         |
| source    | 数据源，例如：`[{id:'1',name:'电脑'}]`       | 空数组：[] |
| onClick   | 各项的点击事件 ,`(checkedItem)=>{}`          | 空函数     |
| isSingle  | 是否为单选                                   | false      |
| idField   | 指定数据源中作为 id 的字段，比如`uid`        | id         |
| textField | 指定数据源中作为 text 显示的字段，比如`text` | name       |
| className | 样式名称                                     |            |
| style     | 内嵌样式                                     |            |
