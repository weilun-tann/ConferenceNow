import React, {Component} from 'react';
import BookingsList from "../Components/Booking/BookingsList";
import './Pages.css';
import Snackbar from "@material-ui/core/Snackbar";
import {Alert} from "../helpers/helpers";


class BookingsPage extends Component {
    state = {
        cancellationSuccess: false
    };

    cancelBookingHandler = (room, user, date, timeslot) => {
        room.cancelTimeslot(date, timeslot);
        user.cancelBooking(room, date, timeslot);
        this.setState({
            cancellationSuccess: true
        });
    };

    dismissSuccessMessage = () => {
        this.setState({
            cancellationSuccess: false
        })
    };

    render() {
        return (
            <div>

                {/*DISPLAY BOOKING CANCELLATION SUCCESS MESSAGE*/}
                <Snackbar open={this.state.cancellationSuccess} autoHideDuration={3000}
                          onClose={this.dismissSuccessMessage}>
                    <Alert severity="success">
                        Your booking at {this.props.name} has been cancelled.
                    </Alert>
                </Snackbar>

                {/*DISPLAY BOOKINGS PAGE*/}
                <div className="pages">My Bookings</div>
                <BookingsList
                    company={this.props.company}
                    user={this.props.user}
                    cancelBookingHandler={this.cancelBookingHandler}/>
            </div>
        );
    }
}

export default BookingsPage;