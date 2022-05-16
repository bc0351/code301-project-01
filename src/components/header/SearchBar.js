import React from 'react';
import { Dropdown, InputGroup, FormControl, SplitButton } from 'react-bootstrap';
// import FilteredBeasts from './FilteredBeasts';
import '../../css/style.css';

export default class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBeasts: [],
      input: ''
    };
  }

  filterBeasts = (userInput) => {
    let filteredBeasts = 
      (userInput !== undefined) 
        ? isNaN(userInput)
          ? this.props.data.filter((datum) => {
            return (
              datum.beast['title'].includes(userInput) ||
              datum.beast['description'].includes(userInput) ||
              datum.beast['keyword'].includes(userInput)
            );
          })
          : this.props.data.filter((datum) => datum)
        : this.props.data;
    console.log(filteredBeasts);
    this.setState({
      filteredBeasts: filteredBeasts
    });
    
    filteredBeasts.map(obj => { return obj.beast._id ;});
    console.log(filteredBeasts);
    return filteredBeasts;
  };

  modifiedUserInput = (str) => {
    return isNaN(str) ? str.toLowerCase() : parseInt(str);
  };

  onChange = (e) => {
    e.preventDefault();
    let userInput = this.modifiedUserInput(e.currentTarget.value);
    this.setState({
      filteredBeasts: this.filterBeasts(userInput),
      input: e.currentTarget.value,
    });
    console.log(this.state.filteredBeasts);
    this.props.methods.handleFilter(this.state.filteredBeasts);
  };

  render() {
    let data = this.state.data;
    console.log(data);
    let dropDownItems = data.map((o, i)=> {(o.beast.display===true?<Dropdown.Item eventKey={i+1} value={o.horns} />:'');console.log(o);});
    return (
      <InputGroup className="mb-3 search-bar-input">
        <FormControl
          onChange={this.onChange}
          value={this.state.input}
          placeholder="Filter your favorite horned beasts..."
          aria-label="Horned Beasts Filter"
          type="text"
        />
        <SplitButton
          variant="outline-secondary"
          title="Search"
          id="search-bar-button"
        >
          {dropDownItems}
        </SplitButton>
      </InputGroup>
    );
  }
}
