import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import '../../css/style.css';

export default class FilteredBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: this.props.data
    };
  }
  render() {
    let data = this.props.data;
    console.log(this.props);
    let dropDownItems = data.map((o, i)=> {(o.display===true?<Dropdown.Item eventKey={i+1} value={o.horns} />:'');console.log(o);});
    return (
      <>{dropDownItems}</>
    );
  }
}
