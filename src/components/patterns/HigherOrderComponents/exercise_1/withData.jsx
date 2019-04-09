import React from "react";

/*
  A higher-order component (HoC) is a function that:
    1- receives a COMPONENT as a parameter (hint: is this function receving a component?)
    2- and returns another component
*/
const withData = (InnerComponent) => {
  class OuterComponent extends React.Component {
    state = {
      data: undefined,
      loading: false,
      error: undefined
    };

    componentDidMount = async () => {
      this.setState({ loading: true });
      try {
        const response = await fetch(this.props.url);
        const data = await response.json();
        this.setState({ data });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
    };

    render() {
      // you should return something here
      return <InnerComponent {...this.props} data={this.state.data} error={this.state.error} loading={this.state.loading}/>
    }
  }

  return OuterComponent;
};

export default withData;
