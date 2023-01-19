// import React, { Component } from 'react';
// // import { getUserData } from './api'; // fonction pour récupérer les données de l'utilisateur
// // import { updateUserData } from './api'; // fonction pour mettre à jour les données de l'utilisateur
// // import { deleteUser } from './api'; // fonction pour supprimer un utilisateur
// import { Link } from 'react-router-dom'; // pour la navigation
// import { AuthContextProvider } from '../context/authContext';

// class UserPage extends Component {
//   state = {
//     user: null, // propriété qui va stocker les données de l'utilisateur
//     isLoading: true, // propriété pour savoir si les données sont en cours de chargement
//     error: null, // propriété pour stocker les erreurs
//   };

//   componentDidMount() {
//     // dans la méthode componentDidMount on récupère les données de l'utilisateur
//     getUserData(this.props.userId)
//       .then(user => this.setState({ user, isLoading: false }))
//       .catch(error => this.setState({ error, isLoading: false }));
//   }

//   handleUpdateClick = (e) => {
//     e.preventDefault();
//     updateUserData(this.state.user)
//       .then(updatedUser => this.setState({ user: updatedUser }))
//       .catch(error => this.setState({ error }));
//   }

//   handleDeleteClick = (e) => {
//     e.preventDefault();
//     deleteUser(this.state.user.id)
//       .then(() => this.props.history.push('/'))
//       .catch(error => this.setState({ error }));
//   }

//   render() {
//     const { user, isLoading, error } = this.state;

//     if (isLoading) {
//       return <p>Loading ...</p>;
//     }

//     if (error) {
//       return <p>Error: {error.message}</p>;
//     }

//     return (
//       <div>
//         <Link to="/">Back to home</Link>
//         <h1>User Page</h1>
//         <p>Name: {user.name}</p>
//         <p>Email: {user.email}</p>
//         <button onClick={this.handleUpdateClick}>Update</button>
//         <button onClick={this.handleDeleteClick}>Delete</button>
//       </div>
//     );
//   }
// }

// export default UserPage;