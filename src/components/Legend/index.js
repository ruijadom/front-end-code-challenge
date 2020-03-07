import React, { Component } from 'react';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';
import arrayMove from 'array-move';
import Spinner from '../Shared/Spinner/Spinner';
import LegendItem from './LegendItem';
import './styles.scss';

const SortableItem = SortableElement(props => <LegendItem {...props} />);

const SortableList = SortableContainer(({ legends }) => {
  return (
    <div className="legend-wrapper">
      {legends.map(({ id, ...rest }, index) => (
        <SortableItem index={index} key={id} isLast={index + 1 === legends.length} {...rest} />
      ))}
    </div>
  );
});

class Legend extends Component {
  state = {
    isLoading: true,
    legends: []
  };

  async componentDidMount() {
    await import('../data')
      .then(data => {
        this.setState({ legends: data.default, isLoading: false });
      })
      .catch(err => console.error(err));
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(prevState => ({
      legends: arrayMove(prevState.legends, oldIndex, newIndex)
    }));
  };

  render() {
    const { legends, isLoading } = this.state;
    return isLoading ? (
      <Spinner />
    ) : (
      <div className="app">
        <SortableList legends={legends} onSortEnd={this.onSortEnd} useDragHandle />
      </div>
    );
  }
}

export default Legend;
