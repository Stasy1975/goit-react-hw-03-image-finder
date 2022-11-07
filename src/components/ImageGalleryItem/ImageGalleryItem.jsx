import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ImageGalleryImage, GalleryItem } from './ImageGalleryItem.styled'
import { ModalWindow } from 'components/Modal/Modal';

export default class ImageGalleryItem extends Component {
  state = {
    showModal: false
  };
 
  togleModal = () => {
    this.setState(prevState =>({ showModal: !prevState.showModal }))}

  render() {
    const { largeImageURL, webformatURL, tags } = this.props.image;

    return (
      <GalleryItem>
        <ImageGalleryImage onClick={this.togleModal}
         src={webformatURL}
          alt={tags}
        />
        {this.state.showModal && (
          <ModalWindow src={largeImageURL} alt={tags} onClose={this.togleModal} />
        )}
      </GalleryItem>
    )
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string,
  }).isRequired,
};


// <Grid>
//           {this.state.img.map(item => (
//             <GridItem key={item.id}>
//               <CardItem color={item.avg_color}>
//                 <img src={item.src.large} alt={item.alt} />
//               </CardItem>
//             </GridItem>
//           ))}
//         </Grid>