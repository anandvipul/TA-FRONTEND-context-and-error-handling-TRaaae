import React from "react";

const withFilter = (WrapperComponent, data) => {
  class WithFilter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchTer: "",
        filteredData: [],
      };
    }

    handleChange = ({ target: { value } }) => {
      //   console.log(target, value);

      this.setState(
        (prevState) => {
          return { searchTer: value };
        },
        () => {
          this.filter();
        }
      );
    };

    filter = () => {
      let filteredData = data.filter((article) =>
        article.title.toLowerCase().includes(this.state.searchTer)
      );
      this.setState({ filteredData: filteredData });
    };

    componentDidMount = () => {
      this.setState({ filteredData: data });
    };

    render() {
      return (
        <>
          <WrapperComponent
            handleChange={this.handleChange}
            {...this.props}
            searchTerm={this.state.searchTer}
            filteredData={this.state.filteredData}
          />
        </>
      );
    }
  }

  return WithFilter;
};

export default withFilter;
