// import React from "react";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";
// import { Input, FormBtn } from "../../components/Form";

// class addTix extends React.Component {
//   handleInputChange = event => {
//     const { name, value } = event.target;
//     this.setState({
//       [name]: value
//     });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     if (this.state.title && this.state.author) {
//       API.addTickets({
//         date: this.state.date,
//         seatSec: this.state.seatSec,
//         synopsis: this.state.synopsis,
//         seatRow: this.state.seatRow,
//         seatNum: this.state.seatNum,
//         eventTitle: this.state.eventTitle,
//         status: this.state.status
        
//       })
//         .then(res => this.loadBooks())
//         .catch(err => console.log(err));
//     }
//   };

//   render() {
//     return (
//       <div className="navTabs">
//         <h1>addTix Page</h1>
//         <form>
//           <Input
//             value={this.state.title}
//             onChange={this.handleInputChange}
//             name="title"
//             placeholder="Title (required)"
//           />
//           <Input
//             value={this.state.author}
//             onChange={this.handleInputChange}
//             name="author"
//             placeholder="Author (required)"
//           />
//           <TextArea
//             value={this.state.synopsis}
//             onChange={this.handleInputChange}
//             name="synopsis"
//             placeholder="Synopsis (Optional)"
//           />
//           <FormBtn
//             disabled={!(this.state.author && this.state.title)}
//             onClick={this.handleFormSubmit}
//           >
//             Submit Book
//               </FormBtn>
//         </form>
//       </div>
//     );
//   }
// }

// export default addTix;