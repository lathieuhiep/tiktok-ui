import {useEffect, useRef, useState} from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSearch} from "@fortawesome/free-solid-svg-icons";

import {Wrapper as PopperWrapper} from "../../../Popper";
import AccountItem from "../../../AccountItem";

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)

    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1,2,3])
        }, 0)
    }, [])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    console.log(showResult && searchResult.length > 0)

    return (
        <div className="search">
            <HeadlessTippy
                interactive
                visible={showResult && searchResult.length > 0}
                render={attrs => (
                    <div className="search-result" tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className="search-result__title">
                                Accounts
                            </h4>

                            <div className="list-account">
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                                <AccountItem/>
                            </div>
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <form className="search__form">
                    <input
                        ref={inputRef}
                        value={searchValue}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={e => setSearchValue(e.target.value)}
                        onFocus={() => setShowResult(true)}
                    />

                    { !! searchValue && (
                        <button
                            className="btn-clear"
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                    ) }

                    {/*<div className="loading">*/}
                    {/*    <FontAwesomeIcon icon={faSpinner}/>*/}
                    {/*</div>*/}

                    <button className="btn-search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    )
}

export default Search