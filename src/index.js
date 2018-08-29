import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default class Layout extends React.Component {

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const props = {
      className: classnames('react-npm-temp')
    };
    return (
      <div {...props}>
        react-npm-temp
      </div>
    );
  }
}
