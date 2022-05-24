import React, { createContext, useReducer } from 'react';
import {
  usersInitialState,
  UserListReducer,
  listUserDetailReducer,
  AddNewUserReducer,
  deleteUserReducer,
  EditUserDetails,
} from 'reducers/userReducer';

export const UserStateContext = createContext();
export const UserStateDispatch = createContext();

export const UserContextProvider = ({ children }) => {
  const [members, userListDispatch] = useReducer(
    UserListReducer,
    usersInitialState
  );
  const [userDetails, userDetailsDispatch] = useReducer(
    listUserDetailReducer,
    {}
  );
  const [deleteMsg, deleteDispatch] = useReducer(deleteUserReducer, {});
  const [addMembers, addMembersDispatch] = useReducer(AddNewUserReducer, {});
  const [editUserDetails, editUserDetailsDispatch] = useReducer(
    EditUserDetails,
    {}
  );
  return (
    <UserStateContext.Provider
      value={{ members, userDetails, addMembers, editUserDetails, deleteMsg }}
    >
      <UserStateDispatch.Provider
        value={{
          userListDispatch,
          userDetailsDispatch,
          addMembersDispatch,
          editUserDetailsDispatch,
          deleteDispatch,
        }}
      >
        {children}
      </UserStateDispatch.Provider>
    </UserStateContext.Provider>
  );
};
