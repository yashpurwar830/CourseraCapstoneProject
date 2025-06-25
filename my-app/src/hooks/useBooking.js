import { useReducer } from "react";
import { fetchAPI } from "../utils/bookingUtils";

function updateTimes(state, date) {
  return { availableTimes: fetchAPI(new Date()) };
}

const initialState = { availableTimes: fetchAPI(new Date()) };

export default function useBooking() {
  return useReducer(updateTimes, initialState);
}
