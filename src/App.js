import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// components
import Counter from './app/features/Counter';
import UserList from './app/features/users/UserList';
import AddUser from './app/features/users/AddUser';
import EditUser from './app/features/users/EditUser';
import Company from './app/features/users/Company';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <UserList />
                <AddUser />
              </>

            }
          >
          </Route>

          <Route
            path='/edit-user/:id'
            element={
              <EditUser />
            }
          />
          <Route
            path='/company'
            element={
              <Company />
            }
          />

          {/* <Route path="/add-user">
            <h1>Add user</h1>
          </Route>
          <Route path="/edit-user">
            <h1>Edit user</h1>
          </Route> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
