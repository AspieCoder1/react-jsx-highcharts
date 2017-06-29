import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Hidden from '../Hidden';
import getModifiedProps from '../../utils/getModifiedProps';

class Scrollbar extends Component {

  static propTypes = {
    update: PropTypes.func, // Provided by ChartProvider
    enabled: PropTypes.bool.isRequired
  };

  static defaultProps = {
    enabled: true
  };

  constructor (props) {
    super(props);

    this.updateScrollbar = this.updateScrollbar.bind(this);
  }

  componentDidMount () {
    const { children, ...rest } = this.props;
    this.updateScrollbar({
      ...rest
    });
  }

  componentDidUpdate (prevProps) {
    const modifiedProps = getModifiedProps(prevProps, this.props);
    if (modifiedProps !== false) {
      this.updateScrollbar(modifiedProps);
    }
  }

  componentWillUnmount () {
    this.updateScrollbar({
      enabled: false
    });
  }

  updateScrollbar (config) {
    this.props.update({
      scrollbar: config
    }, true);
  }

  render () {
    const { children } = this.props;
    if (!children) return null;

    return (
      <Hidden>{children}</Hidden>
    );
  }
}

export default Scrollbar;
