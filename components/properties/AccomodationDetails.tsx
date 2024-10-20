"use client";
import React, { useReducer } from "react";
import Details from "./Details";

// Define the state shape
type State = {
  guests: number;
  bedrooms: number;
  beds: number;
  baths: number;
};

// Define the action types
type Action =
  | { type: "increment"; name: keyof State }
  | { type: "decrement"; name: keyof State };

// Initial state
const initialState: State = {
  guests: 0,
  bedrooms: 0,
  beds: 0,
  baths: 0,
};

// Reducer function
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return {
        ...state,
        [action.name]: state[action.name] + 1,
      };
    case "decrement":
      return {
        ...state,
        [action.name]: Math.max(state[action.name] - 1, 0),
      };
    default:
      return state;
  }
};

function AccomodationDetails() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <section>
      <h1 className="text-2xl font-bold mb-4">Accomodation Details</h1>
      <div className="space-y-4">
        <Details
          name="guests"
          value={state.guests}
          onIncrement={() => dispatch({ type: "increment", name: "guests" })}
          onDecrement={() => dispatch({ type: "decrement", name: "guests" })}
        />
        <Details
          name="bedrooms"
          value={state.bedrooms}
          onIncrement={() => dispatch({ type: "increment", name: "bedrooms" })}
          onDecrement={() => dispatch({ type: "decrement", name: "bedrooms" })}
        />
        <Details
          name="beds"
          value={state.beds}
          onIncrement={() => dispatch({ type: "increment", name: "beds" })}
          onDecrement={() => dispatch({ type: "decrement", name: "beds" })}
        />
        <Details
          name="baths"
          value={state.baths}
          onIncrement={() => dispatch({ type: "increment", name: "baths" })}
          onDecrement={() => dispatch({ type: "decrement", name: "baths" })}
        />
      </div>
    </section>
  );
}

export default AccomodationDetails;
