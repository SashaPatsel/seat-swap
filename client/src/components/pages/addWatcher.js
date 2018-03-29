import React from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
// import { Input, FormBtn } from "../../components/Form";


class addWatcher extends React.Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };
  render() {
    return (
      <div className="navTabs">
        <h1>addWatcher Page</h1>
        {/* <form>
          <Input
            value={this.state.title}
            onChange={this.handleInputChange}
            name="title"
            placeholder="Title (required)"
          />
          <Input
            value={this.state.author}
            onChange={this.handleInputChange}
            name="author"
            placeholder="Author (required)"
          />
          <FormBtn
            disabled={!(this.state.author && this.state.title)}
            onClick={this.handleFormSubmit}
          >
            Submit Book
              </FormBtn>
        </form> */}
      </div>
    );
  }
}

export default addWatcher;