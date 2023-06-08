import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const ROWS = 12;
const COLS = 15;
const SEAT_PRICE = 55000;
const DISABLED_SEATS = ['A3', 'A4', 'C10', 'I3', 'I4', 'I5', 'G4', 'G8', 'H13', 'H14'];


const RenderCommentReviewFilm = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
    }, [selectedSeats]);

    const handleSeatClick = (seatId) => {
        const isSeatSelected = selectedSeats.includes(seatId);

        if (isSeatSelected) {
            // Bỏ chọn ghế nếu đã được chọn trước đó
            setSelectedSeats((prevSelectedSeats) =>
                prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seatId)
            );
        } else {
            // Kiểm tra nếu đã chọn tối đa 5 ghế
            if (selectedSeats.length < 5) {
                setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
            } else {
                // Xử lý khi đã chọn tối đa 5 ghế
                alert("Bạn chỉ được chọn tối đa 5 ghế.");
            }
        }

    };

    const isSeatSelected = (seatId) => {
        return selectedSeats.includes(seatId);
    };

    const isSeatDisabled = (seatId) => {
        return DISABLED_SEATS.includes(seatId);
    };

    const calculateTotalPrice = () => {
        const price = selectedSeats.length * SEAT_PRICE;
        setTotalPrice(price);
    };

    const renderSeats = () => {
        const seats = [];

        for (let row = 0; row < ROWS; row++) {
            for (let col = 1; col < COLS; col++) {


                const seatId = `${String.fromCharCode(65 + row)}${col}`;

                const isSeatReserved = isSeatSelected(seatId);
                const isSeatDisabled1 = isSeatDisabled(seatId);

                seats.push(
                    <div
                        key={seatId}
                        className={`seat ${isSeatReserved ? 'selected' : ''} ${isSeatDisabled1 ? 'disabled' : ''}`}
                        onClick={isSeatDisabled1 ? undefined : () => handleSeatClick(seatId)}
                    >
                        {seatId}
                    </div>
                );

            }

            
        }

        return seats;
    };

    const renderSelectedSeats = () => {
        if (selectedSeats.length === 0) {
            return "";
        }

        const selectedSeatsString = selectedSeats.join(", ");

        return (
            <span>
                {selectedSeatsString}
                <span onClick={() => setSelectedSeats([])} className='btn_reset_seats'>
                    <AiFillCloseCircle />
                </span>
            </span>
        );
    };

    return (
        <div className="wrap">
            <div>
                <div>
                    <h1>SCREEN</h1>
                    ---
                </div>
                <div className="seat-container">{renderSeats()}</div>
            </div>
            <div className="total-info">
                <div className="selected-seats">
                    Ghế đã chọn: {renderSelectedSeats()}

                </div>
                <div className="total-price">
                    Tổng giá trị: {totalPrice.toLocaleString()}đ
                </div>
            </div>
        </div>
    );
}

export default RenderCommentReviewFilm