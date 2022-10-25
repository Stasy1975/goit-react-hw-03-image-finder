import React, { Component } from "react";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import * as ImageService from "./servise/getAPI"

export class App extends Component {
state = {
    images: [],
    query: '',
    error: null,
    page: 1,
    isShow: false,
  per_page: 12,
  isEmphty: false,
  loading: false,
  }
  
   componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.getImagesGallery(query, page);
    }
  }
  


  
  getImagesGallery = async (query, page) => {
    if (!query) {
      return;
    }
    this.setState({
      loading: true,
    });
    try {
      const images = await ImageService.getImages(this.state.query, this.state.page);
      console.log(images);
      if (images.images.length === 0) {
         this.setState({ isEmphty: true });
     
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...images.images],
        isShow: prevState.page < Math.ceil(images.total / this.per_page),

      }));
    } catch (error) {
      console.log({ error });
    } finally {
      this.setState({
        loading: false,
      });
    }
  };


  
  handleForm = value => {
    this.setState({
    images: [],
    query: value,
    loading: false,
    error: null,
    page: 1,
    isShow: false,
    isEmphty: false,
     });
  };

  incrementPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };


  render(){
  return (
    <div>
      <Searchbar onSubmit={this.handleForm}/>
      <ImageGallery images={this.state.images}/>
    </div>
  );}
};
