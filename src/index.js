import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styles from "./index.less";
import checkImage from "./assets/check@2x.png";

export default class GroupTag extends PureComponent {
  constructor(props) {
    super(props);
    const { isSingle, value } = props;
    this.state = {
      checkedItem: isSingle && value.length > 0 ? [value[0]] : value,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { value } = nextProps;
    if (Array.isArray(value) && value.length > 0) {
      this.setState({ checkedItem: [...value] });
    }
  }

  onClickItem = item => {
    const { onClick, isSingle, idField } = this.props;
    const { checkedItem } = this.state;
    // 单选
    if (isSingle) {
      checkedItem[0] = item[idField];
    } else {
      // 多选
      const index = checkedItem.findIndex(ele => ele === item[idField]);
      if (index >= 0) {
        checkedItem.splice(index, 1);
      } else {
        checkedItem.push(item[idField]);
      }
    }

    this.setState({ checkedItem: [...checkedItem] });
    onClick(checkedItem);
  };

  render() {
    const { source, idField, textField, className, style } = this.props;
    const { checkedItem } = this.state;
    const isIncludes = id => {
      return checkedItem.findIndex(item => item === id) >= 0;
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
  value: PropTypes.array,
  source: PropTypes.array,
  onClick: PropTypes.func,
  isSingle: PropTypes.bool,
  idField: PropTypes.string,
  textField: PropTypes.string,
  className: PropTypes.any,
  style: PropTypes.object,
};

GroupTag.defaultProps = {
  value: [],
  source: [],
  onClick: () => {},
  isSingle: false,
  idField: "id",
  textField: "name",
};
