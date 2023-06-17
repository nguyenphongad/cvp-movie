import React, { useEffect, useState } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai';
import RenderFuncGetIdMovies from '../../../FunctionGetIdMovies/RenderFuncGetIdMovies';

const SEAT_ROWS = 12;
const SEAT_COLS = 14;

const MAXIMUM_SELECT_SEAT = 6;
const SEAT_PRICE_REGULAR = 45000;
const SEAT_PRICE_VIP = 55000;
const SEAT_PRICE_COUPLE = 120000;
const SEAT_REGULAR_ROWS = 3;
const SEATS_DISABLED = ['H10', 'C4', 'H8', 'H9', 'I5', 'I6', 'I7', 'I1', 'I2',
    'G5', 'G8', 'H13', 'H14', 'L2', 'L3', 'E10', 'E11', 'J10', 'J11', 'J12',
    'J13', 'J14', 'C5', 'G6', 'G7', 'H6', 'H7', 'F7', 'F8','G9','I8','I9','J6','J7','K8','K9'];


const RenderHandleBookSeats = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        calculateTotalPrice();
    }, [selectedSeats]);

    const handleSeatClick = (seatId) => {
        const isSeatSelected = selectedSeats.includes(seatId);
        if (isSeatSelected) {
            setSelectedSeats((prevSelectedSeats) =>
                prevSelectedSeats.filter((selectedSeats) => selectedSeats !== seatId)
            );
        } else {
            if (selectedSeats.length < MAXIMUM_SELECT_SEAT) {
                setSelectedSeats((prevSelectedSeats) => [...prevSelectedSeats, seatId]);
            } else {
                alert("CHON TOI DA " + MAXIMUM_SELECT_SEAT + " GHE 1 LAN !!")
            }
        }
    }

    const Boolean_isSeatSelected = (seatId) => {
        return selectedSeats.includes(seatId);
    };
    const Boolean_isSeatDisabled = (seatId) => {
        return SEATS_DISABLED.includes(seatId);
    };

    const calculateTotalPrice = () => {
        let cal_price = 0;
        selectedSeats.forEach((seatId) => {
            const seatRow = seatId.charCodeAt(0) - 65;

            if (seatRow === SEAT_ROWS - 1) {
                cal_price = cal_price + SEAT_PRICE_COUPLE;
            } else if (seatRow < SEAT_REGULAR_ROWS) {
                cal_price = cal_price + SEAT_PRICE_REGULAR;
            } else {
                cal_price = cal_price + SEAT_PRICE_VIP;
            }
        });

        setTotalPrice(cal_price);
    };


    const renderSeats = () => {
        const rows = [];

        for (let row = 0; row < SEAT_ROWS; row++) {
            const isLastRow_couple = row === SEAT_ROWS - 1;
            const isFirstRegularRows = row < SEAT_REGULAR_ROWS;
            const seatCount = isLastRow_couple ? 5 : SEAT_COLS;
            const ARRAY_SEATS = [];

            for (let col = 1; col <= seatCount; col++) {
                const seatId = `${String.fromCharCode(65 + row)}${col}`;
                const isSeatReserved = Boolean_isSeatSelected(seatId);
                const isSeatDisabled = Boolean_isSeatDisabled(seatId);

                let seatContent = seatId;
                if (isLastRow_couple) {
                    seatContent = `CP${col}`;
                }

                const seatClasses = `btn_seats ${isSeatReserved ? "seats_selected" : ""} ${isSeatDisabled ? "seats_disabled" : ""} ${isFirstRegularRows ? "seats_fisrt_regular" : ""}${isLastRow_couple ? "seats_couple" : ""}`;

                ARRAY_SEATS.push(
                    <div
                        key={seatId}
                        className={seatClasses}
                        onClick={isSeatDisabled ? undefined : () => handleSeatClick(seatId)}
                    >
                        {seatContent}
                    </div>
                );
            }
            rows.push(<div key={`row-${row}`} className='seat_Row'>{ARRAY_SEATS}</div>);
        }
        return rows;
    };

    const renderSelectedSeats = () => {
        if (selectedSeats.length === 0) return "";

        const selectedSeatsString = selectedSeats.map((seatId) => {
            const row = seatId.charCodeAt(0) - 65;
            const isLastRow = row === SEAT_ROWS - 1;
            const seatNumber = seatId.substring(1);
            const seatLabel = isLastRow ? `CP${seatNumber}` : seatId;
            return seatLabel;
        }).join(", ");

        const handleUnSelectedSeats = () => {
            setSelectedSeats([]);
        }

        return (
            <span>
                {selectedSeatsString}
                <span onClick={handleUnSelectedSeats}>
                    <AiFillCloseCircle />
                </span>
            </span>
        )

    };

    const { getIdMovies, LIST_ARRAY_MOVIE } = RenderFuncGetIdMovies(12);

    return (
        <div className='wrap_handle-book-seats'>
            <div className="body_view_selected_seats">
                <div className='before_screen_line'>
                    <h2>SCREEN</h2>
                    <div className='border__line-screen'>
                        <div className='border__line-screen line_2_index'> </div>
                    </div>
                </div>
                <div className='container_list_seats'>
                    {renderSeats()}
                </div>
            </div>
            <div className="total_info--select_seats">
                <div>
                    {getIdMovies === "" ? undefined : LIST_ARRAY_MOVIE.titleFilm.toUpperCase()}
                    {getIdMovies === "" ? undefined : LIST_ARRAY_MOVIE.dateMovieFilm}
                </div>
                <div className="selected_seats--info">
                    Ghế đã chọn: {renderSelectedSeats()}

                </div>
                <div className="total_price--seats">
                    Tổng giá trị: {totalPrice.toLocaleString()}đ
                </div>
            </div>
        </div>
    )
}

export default RenderHandleBookSeats;