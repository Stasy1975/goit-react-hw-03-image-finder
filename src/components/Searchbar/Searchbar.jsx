import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { FcSearch } from 'react-icons/fc';
import {
  Header,
  SearchForm,
  SearchButton,
  SearchLabel,
  SearchInput,
} from './Searchbar.styled';



export default class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInput = e => {
    const value = e.currentTarget.value;
    this.setState({ query: value });
    console.log(value);
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.query);
    if (this.state.query.trim() === '') return alert('Hемає пошукового запиту');
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <FcSearch size="28" />
            <SearchLabel>Search</SearchLabel>
          </SearchButton>

          <SearchInput
            type="text"
            autocomplete="off"
            autoFocus
            placeholder="Пошук зображень і фотографій"
            name="query"
            value={this.state.query}
            onChange={this.handleInput}
          />
        </SearchForm>
      </Header>
    );
  }
}


Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};


// export class SearchForm extends Component {
//   state = { 
//     querry: "",
  
//   }

//   handelInput = (event) => {
//         const value = event.target.value;
//     console.log(value)
//   this.setState({querry:value})

//   }
//   handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(this.state.querry);
//     this.props.handleForm(this.state.querry)
//     this.setState({querry:""})
//  }
//   render() {
//     return <>
//         <SearchFormStyled onSubmit={this.handleSubmit}>
//         <InputSearch onChange={this.handelInput} value={this.state.querry} /> 
//         <FormBtn>
//           <FiSearch />
//         </FormBtn>
//     </SearchFormStyled>
//     </>
//       ;
//   }
// }