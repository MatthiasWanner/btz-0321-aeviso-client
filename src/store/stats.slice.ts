import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '.';

export type UserSelection = {
  name: string;
  weeklyBasis: number;
  halfDays: number;
  totalHours: number;
};

interface StatsState {
  selectedUsers: UserSelection[];
}

const initialState: StatsState = {
  selectedUsers: [],
};

export const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<UserSelection>) => {
      const userIndex = state.selectedUsers.findIndex(
        (item) => item.name.toLowerCase() === action.payload.name.toLowerCase()
      );
      if (userIndex !== -1) state.selectedUsers[userIndex] = action.payload;
      else state.selectedUsers.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const { addUser, reset } = statsSlice.actions;

// TODO: Improve dispatch types
interface ReturnUseState {
  users: UserSelection[];
  dispatchAddUser: (payload: UserSelection) => {
    payload: UserSelection;
    type: string;
  };
  dispatchReset: () => {
    type: string;
  };
}

export const useStats = (): ReturnUseState => {
  const users = useSelector((state: RootState) => state.stats.selectedUsers);
  const dispatch = useDispatch();
  const dispatchReset = () => dispatch(reset());
  const dispatchAddUser = (payload: UserSelection) => dispatch(addUser(payload));
  return { users, dispatchAddUser, dispatchReset };
};

export default statsSlice.reducer;
