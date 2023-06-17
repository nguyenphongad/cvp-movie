import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';

const ROWS = 12;
const COLS = 14;
const MAXIMUM_SELECT_SEAT = 6;
const SEAT_PRICE_REGULAR = 45000;
const SEAT_PRICE = 55000;
const SEAT_PRICE_COUPLE_ROW = 120000;
const SEAT_REGULAR_ROW = 3;

const DISABLED_SEATS = ['H10', 'C4', 'C10', 'I5', 'I6', 'I7', 'I1', 'I2',
    'G5', 'G8', 'H13', 'H14', 'L2', 'L3', 'E10', 'E11', 'J10', 'J11', 'J12',
    'J13', 'J14', 'C5', 'G6', 'G7', 'H6', 'H7', 'F7', 'F8'];

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
            if (selectedSeats.length < MAXIMUM_SELECT_SEAT) {
                setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
            } else {
                alert(`CHON TOI DA ${MAXIMUM_SELECT_SEAT} GHE 1 LAN `);
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
            const seatRow = seatId.charCodeAt(0) - 65;

            if (seatRow === ROWS - 1) {
                price += SEAT_PRICE_COUPLE_ROW;
            } else if (seatRow < SEAT_REGULAR_ROW) {
                price += SEAT_PRICE_REGULAR;
            } else {
                price += SEAT_PRICE;
            }
        });

        setTotalPrice(price);
    };

    const renderSeats = () => {
        const rows = [];

        for (let row = 0; row < ROWS; row++) {
            const isLastRow = row === ROWS - 1;
            const isFirstRegularRows = row < SEAT_REGULAR_ROW;
            const seatCount = isLastRow ? 5 : COLS;
            const seats = [];

            for (let col = 1; col <= seatCount; col++) {
                const seatId = `${String.fromCharCode(65 + row)}${col}`;
                const isSeatReserved = isSeatSelected(seatId);
                const isSeatDisabledGet = isSeatDisabled(seatId);

                let seatContent = seatId;
                if (isLastRow) {
                    seatContent = `CP${col}`;
                }


                const seatClasses = `seat ${isSeatReserved ? 'selected' : ''} ${isSeatDisabledGet ? 'disabled' : ''} ${isLastRow ? 'couple_set' : ''} ${isFirstRegularRows ? 'pc-first' : ''}`;
                seats.push(
                    <div
                        key={seatId}
                        className={seatClasses}
                        onClick={isSeatDisabledGet ? undefined : () => handleSeatClick(seatId)}
                    >
                        {seatContent}
                    </div>
                );
            }

            rows.push(<div key={`row-${row}`} className="row_seat">{seats}</div>);
        }

        return rows;
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
                <div className='before_screen_line'>
                    <h2>SCREEN</h2>
                    <div className='border__line-screen'>
                        <div className='border__line-screen line_2_index'> </div>
                    </div>
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