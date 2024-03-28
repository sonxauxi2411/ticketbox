import { createSlice } from "@reduxjs/toolkit";

const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    tickets: {},
    total: 0,
  },
  reducers: {
    setTickets: (state, action) => {
      const { ticketId, quantity, total, name, price } = action.payload;
      if (quantity == 0) {
        delete state.tickets[ticketId];
      } else {
        state.tickets = {
          ...state.tickets,
          [ticketId]: {
            quantity: quantity,
            total: total,
            name: name,
            price,
          },
        };
      }

      state.total = Object.values(state.tickets).reduce(
        (acc, ticket) => acc + ticket.total,
        0
      );
    },
    resetBooking : (state)=>{
      state.tickets = {};
      state.total = 0;
    }
  },
});
export const { setTickets, resetBooking } = bookingSlice.actions;

export default bookingSlice.reducer;
