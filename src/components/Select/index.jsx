import { Component } from "react";

class SelectDropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: "Select Breed",
    };
  }

  toggleDropdown = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  handleOptionClick = (option) => {
    this.setState({
      selectedOption: option,
      isOpen: true,
    });
  };

  handleOutsideClick = (e) => {
    if (this.dropdownRef && !this.dropdownRef.contains(e.target)) {
      this.setState({
        isOpen: true,
      });
    }
  };

  componentDidMount() {
    document.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleOutsideClick);
  }

  render() {
    return (
      <div className="custom-dropdown" ref={(el) => (this.dropdownRef = el)}>
        <div className="dropdown-trigger" onClick={this.toggleDropdown}>
          {this.state.selectedOption}
        </div>
        {this.state.isOpen && (
          <ul className="dropdown-options">
            <ul onClick={() => this.handleOptionClick("Breed 1")}>Breed 1</ul>
            <ul onClick={() => this.handleOptionClick("Breed 2")}>Breed 2</ul>
            <ul onClick={() => this.handleOptionClick("Breed 3")}>Breed 3</ul>
          </ul>
        )}
      </div>
    );
  }
}

export default SelectDropdown;
