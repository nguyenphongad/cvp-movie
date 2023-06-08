import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const ROWS = 12;
const COLS = 15;
const SEAT_PRICE = 55000;
const SEAT_PRICE_LAST_ROW = 120000;
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
            setSelectedSeats((prevSelectedSeats) =>
                prevSelectedSeats.filter((selectedSeat) => selectedSeat !== seatId)
            );
        } else {
            if (selectedSeats.length < 5) {
                setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
            } else {
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
        let price = 0;

        selectedSeats.forEach((seatId) => {
            const seatRow = seatId.charCodeAt(0) - 65; // Chuyển đổi chữ cái thành số thứ tự hàng

            if (seatRow === ROWS - 1) {
                price += SEAT_PRICE_LAST_ROW;
            } else {
                price += SEAT_PRICE;
            }
        });

        setTotalPrice(price);
    };

    const renderSeats = () => {
        const seats = [];

        for (let row = 0; row < ROWS; row++) {
            const isLastRow = row === ROWS - 1;
            const seatCount = isLastRow ? 6 : COLS - 1;

            for (let col = 1; col <= seatCount; col++) {
                const seatId = `${String.fromCharCode(65 + row)}${col}`;
                const isSeatReserved = isSeatSelected(seatId);
                const isSeatDisabled1 = isSeatDisabled(seatId);

                let seatPrice = SEAT_PRICE;

                if (isLastRow) {
                    seatPrice = SEAT_PRICE_LAST_ROW;
                }
                if (row === ROWS - 1) {
                    seatPrice = SEAT_PRICE_LAST_ROW;
                }

                let seatContent = seatId;
                if (isLastRow) {
                    seatContent = `CP${col}`;
                }

                seats.push(
                    <div
                        key={seatId}
                        className={`seat ${isSeatReserved ? 'selected' : ''} ${isSeatDisabled1 ? 'disabled' : ''
                            } ${isLastRow ? 'couple_set' : ''}`}
                        onClick={isSeatDisabled1 ? undefined : () => handleSeatClick(seatId)}
                    >
                        {seatContent}
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

        const selectedSeatsString = selectedSeats.map((seatId) => {
            const row = seatId.charCodeAt(0) - 65;
            const isLastRow = row === ROWS - 1;
            const seatNumber = seatId.substring(1);
            const seatLabel = isLastRow ? `CP${seatNumber}` : seatId;
            return seatLabel;
        }).join(", ");

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