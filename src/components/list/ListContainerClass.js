// import * as React from 'react';
// import { Auth0Context } from '../../react-auth0-spa';
// import TaskForm from './TaskForm';
//
// class ListContainerClass extends React.Component {
//   token;
//
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: true,
//       list: [],
//       error: null,
//     };
//
//     // this.token = this.getToken();
//   }
//
//   componentDidMount() {
//     // async() => {
//     //   const token = await this.context.getTokenSilently();
//     // }();
//   }
//
//   // getToken = async() => {
//   //   const token = await this.contextType.getTokenSilently();
//   // };
//
//   handleTaskEdit = (formValue) => {
//     console.log(formValue);
//   };
//
//   render() {
//     return (<div className="container-fluid">
//       <div className="row mt-3 mb-5">
//         <div className="col-md-8 offset-md-2 mb-3">
//           <TaskForm onFormSubmit={this.handleTaskEdit}/>
//         </div>
//         {this.token}
//       </div>
//     </div>);
//   }
//
// }
//
// ListContainerClass.contextType = Auth0Context;
//
// export default ListContainerClass;
