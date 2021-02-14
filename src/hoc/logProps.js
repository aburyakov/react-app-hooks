import React from 'react';

function logProps(WrappedComponent) {
    return class extends React.Component {
      componentDidUpdate(prevProps) {
        console.log('Текущие пропсы: ', this.props);
        console.log('Предыдущие пропсы: ', prevProps);
        this.myRef = React
      }
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }
  }

  export default logProps;