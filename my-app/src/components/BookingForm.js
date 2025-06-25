import React, { useState } from "react";

const BookingForm = (props) => {
  const [date, setDate] = useState("");
  const [times, setTimes] = useState("");
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const today = new Date();
    const selectedDate = date ? new Date(date) : null;
    if (!date) {
      newErrors.date = "Date is required.";
    } else if (selectedDate < new Date(today.toDateString())) {
      newErrors.date = "Date cannot be in the past.";
    }
    if (!times) newErrors.times = "Time is required.";
    if (!guests) {
      newErrors.guests = "Number of guests is required.";
    } else if (isNaN(guests) || guests < 1 || guests > 10) {
      newErrors.guests = "Guests must be between 1 and 10.";
    }
    if (!occasion) newErrors.occasion = "Occasion is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      props.submitForm({ date, times, guests, occasion });
    }
  };

  const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
  };

  return (
    <header>
      <section>
        <form onSubmit={handleSubmit} noValidate>
          <fieldset className="formField">
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                type="date"
                required
              />
              {errors.date && <span className="form-error">{errors.date}</span>}
            </div>

            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={times}
                onChange={(e) => setTimes(e.target.value)}
                required
              >
                <option value="">Select a Time</option>
                {props.availableTimes.availableTimes.map((availableTimes) => {
                  return <option key={availableTimes}>{availableTimes}</option>;
                })}
              </select>
              {errors.times && <span className="form-error">{errors.times}</span>}
            </div>

            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                min="1"
                max="10"
                type="number"
                placeholder={0}
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                required
              />
              {errors.guests && <span className="form-error">{errors.guests}</span>}
            </div>

            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                key={occasion}
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
              >
                <option value="">Select an option</option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
              {errors.occasion && <span className="form-error">{errors.occasion}</span>}
            </div>

            <div className="btnReceive">
              <input
                aria-label="On Click"
                type="submit"
                value={"Make Your Reservation"}
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;
