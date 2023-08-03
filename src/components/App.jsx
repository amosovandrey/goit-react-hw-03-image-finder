import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export class App extends Component {
  state = {
    images: [],
    loading: false,
    searchQuery: '',
  };

  // componentDidMount() {
  //   this.setState({ loading: true });

  //   fetch(
  //     'https://pixabay.com/api/?q=vinyl&page=1&key=37648737-76093e0db6038ebde4a82f299&image_type=photo&orientation=horizontal&per_page=12'
  //   )
  //     .then(res => res.json())
  //     .then(images => this.setState({ images }))
  //     .finally(() => this.setState({ loading: false }));
  // }

  handleFormSubmit = searchQuery => {
    this.setState({ searchQuery });
  };

  render() {
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {this.state.loading && <MagnifyingGlass />}
        {this.state.images && (
          <ul>
            <li>
              <img src="" alt="" />
            </li>
          </ul>
        )}
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </div>
    );
  }
}
