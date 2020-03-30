import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.less";
import checkImage from "./assets/check@2x.png";

export default class GroupTag extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checkedItem: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    const { checkedItem } = this.state;
    const { defaultValue } = nextProps;
    if (checkedItem.length === 0 && defaultValue) {
      this.setState({ checkedItem: [defaultValue] });
    }
  }

  onClickItem = item => {
    const { onClick, isSingle } = this.props;
    const { checkedItem } = this.state;
    // 单选
    if (isSingle) {
      checkedItem[0] = item;
    } else {
      // 多选
      const index = checkedItem.findIndex(ele => ele.id === item.id);
      if (index >= 0) {
        checkedItem.splice(index, 1);
      } else {
        checkedItem.push(item);
      }
    }

    this.setState({ checkedItem: [...checkedItem] });
    onClick(checkedItem);
  };

  render() {
    const { source, idField, textField, className, style } = this.props;
    const { checkedItem } = this.state;
    const isIncludes = id => {
      return checkedItem.findIndex(item => item.id === id) >= 0;
    };
    return (
      <div className={`${styles.container} ${className}`} style={style}>
        {(source || []).map(item => (
          <div
            key={item[idField]}
            className={isIncludes(item[idField]) ? styles.checked : styles.item}
            onClick={this.onClickItem.bind(this, item)}
          >
            {item[textField]}
            {isIncludes(item[idField]) ? (
              <img alt="" className={styles.checkImg} src={checkImage} />
            ) : null}
          </div>
        ))}
      </div>
    );
  }
}

GroupTag.propTypes = {
  defaultValue: PropTypes.any,
  source: PropTypes.array,
  onClick: PropTypes.func,
  isSingle: PropTypes.bool,
  idField: PropTypes.string,
  textField: PropTypes.string,
  className: PropTypes.any,
  style: PropTypes.object,
};

GroupTag.defaultProps = {
  source: [],
  onClick: () => {},
  isSingle: false,
  idField: "id",
  textField: "name",
};
