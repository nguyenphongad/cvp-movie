import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { BiSearchAlt2 } from "react-icons/bi";
import { IoClose } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { DropBtnBoxSearch } from '../RenderHeader';

function RenderBoxSearch() {

    const locationSearch = useNavigate();
    const [value_search, setValue_search] = useState("");
    const [btnReset, setbtn__reset] = useState(false);

    const focusValueRef = useRef(null);



    const handleLocationSearch = (e) => {
        setValue_search(e.target.value);
        if (e.target.value != "") {
            locationSearch(`/search?q=${e.target.value}`);
            setbtn__reset(true);
        } else {
            locationSearch("/");
            setbtn__reset(false);
        }


    }
    const handleResetInputSearch = () => {
        setValue_search("");
        focusValueRef.current.focus();
        locationSearch("/");
        setbtn__reset(false);
        toStateValueBoxSearch.setdropdownBoxSearch(false)
    }

    useEffect(() => {
        let hanlder = (e) => {
            if (!toStateValueBoxSearch.dropSearchRef.current.contains(e.target))
                if (value_search != "") {
                    toStateValueBoxSearch.setdropdownBoxSearch(true)
                } else {
                    toStateValueBoxSearch.setdropdownBoxSearch(false)
                }
        }
        document.addEventListener("mousedown", hanlder);
        return () => document.removeEventListener("mousedown", hanlder);
    });


    const toStateValueBoxSearch = useContext(DropBtnBoxSearch);

    return (
        <>
            <div
                className={`box_search ${toStateValueBoxSearch.dropdownBoxSearch ? "activeDropHeader" : "inactiveDropHeader"}`}>
                <div className="body_trans--search">
                    <div className="border_input">
                        <div className="button_change--input">
                            <div className="button__search--size">
                                <BiSearchAlt2 />
                            </div>
                            <div className="box__contain-in">
                                <input
                                    autoFocus
                                    ref={focusValueRef}
                                    type="text"
                                    placeholder="Titles, people, movies"
                                    onChange={handleLocationSearch}
                                    value={value_search}
                                    className={toStateValueBoxSearch.dropdownBoxSearch ? "width_input" : ""}
                                />

                                <div className="btn__reset-input">
                                    <div
                                        className={`border__btn--reset ${btnReset ? "enable_btn-reset" : ""}`}
                                        onClick={handleResetInputSearch}
                                    >
                                        <IoClose />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RenderBoxSearch;