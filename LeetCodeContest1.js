var corpFlightBookings = function (bookings, n) {
    const bookingsSeats = {};
    for (let i = 1; i <= n; i++) {
        bookingsSeats[i] = 0;
    }
    for (let i = 0; i < bookings.length; i++) {
        for (let j = bookings[i][0]; j <= bookings[i][1]; j++) {
            bookingsSeats[j] += bookings[i][2];
        }
    }
    return Object.values(bookingsSeats);

};


console.log(corpFlightBookings([[2, 2, 30], [2, 2, 45], [5, 6, 45]], 6));