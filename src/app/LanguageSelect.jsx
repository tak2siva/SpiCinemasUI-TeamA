import React from 'react';
import { connect } from 'react-redux';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import { fetchLanguage, addRemoveLanguages } from '../filter/language/actions';

class LanguageSelect extends React.Component {
  componentDidMount() {
    this.props.fetchLanguage();
  }
  handleChange = (a,b,c) => {
    console.log(this.props.languages);
  }
  render() {
    return (
      <div style={{float:"right", width:"10%" }}>
        <Select
        name="form-field-name"
        multi={true}
        placeholder="Select Language(s)"
        labelKey="description"
        valueKey="code"
        onChange={this.handleChange}
        options={this.props.languages}
      />
      </div>
      
    )
  }
};

export default connect(
  (state) => {
    return {
      languages: state.languageFilter.languages
    }
  }, (dispatch) => {
    return {
      updateLanguages: (action) => dispatch(addRemoveLanguages(action)),
      fetchLanguage: () => dispatch(fetchLanguage())
    };
  }
)(LanguageSelect);