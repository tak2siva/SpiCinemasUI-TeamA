import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class LanguageSelect extends React.Component {
  handleChange = (a,b,c) => {
    console.log(a,b,c);
  }
  render() {
    return (
      <Select
        name="form-field-name"
        multi
        placeholder="Select Language(s)"
        onChange={this.handleChange}
        options={this.props.languages}
      />
    )
  }
};

const updateLanguages = () => {
  console.log("dispatched");
};

export default connect(
  (state) => {
    return {
      languages: state.filter.languages
    }
  }, (dispatch) => {
    return (action) => updateLanguages(action);
  }
)(LanguageSelect);