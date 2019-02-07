import React from 'react';

export function Palette({ color, name }) {
  const paletteWrapper = {
    width: 150,
    height: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 12,
    flexDirection: 'column'
  };

  const paletteLabel = {
    padding: 8,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white'
  };
  return (
    <div style={{ ...paletteWrapper, backgroundColor: color }}>
      <div style={paletteLabel}>
        <div>{name}</div>
        <div>{color}</div>
      </div>
    </div>
  );
}

export class WindowWidthMonitor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth
    };
  }

  updateWidth = () => {
    console.log('updateWidth');
    this.setState({ width: window.innerWidth });
  };

  componentDidMount() {
    window.addEventListener('resize', this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWidth);
  }

  render() {
    const { width } = this.state;
    return <p>Window width: {width}px</p>;
  }
}
