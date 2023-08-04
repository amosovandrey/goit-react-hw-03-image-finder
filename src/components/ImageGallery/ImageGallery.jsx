import React, { Component } from 'react';
import { Loader } from 'components/Loader/Loader';
import { Gallery } from './ImageGallery.styled';
import { toast } from 'react-toastify';

export class ImageGallery extends Component {
  state = {
    images: null,
    loading: false,
    error: null,
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      this.setState({ loading: true, images: null });
      fetch(
        `https://pixabay.com/api/?q=${this.props.searchQuery}&page=1&key=37648737-76093e0db6038ebde4a82f299&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => {
          if (response.ok) {
            return response.json();
          }

          return Promise.reject(
            new Error(
              `Oops! Looks like there is no images of ${this.props.searchQuery}`
            )
          );
        })
        .then(data => {
          this.setState({ images: data.hits });
        })
        .catch(error => this.setState({ error: error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    const { images, loading, error } = this.state;
    return (
      <>
        {error && toast.warn(`${error.message}`)}
        {loading && <Loader />}
        {images && (
          <Gallery>
            {images.map(image => (
              <li key={image.id}>
                <img src={image.webformatURL} alt={image.tags} />
              </li>
            ))}
          </Gallery>
        )}
      </>
    );
  }
}
