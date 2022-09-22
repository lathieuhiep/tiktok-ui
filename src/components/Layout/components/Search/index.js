import {useEffect, useRef, useState} from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";

import {Wrapper as PopperWrapper} from "../../../Popper";
import AccountItem from "../../../AccountItem";
import { useDebounce } from "../../../../hooks";

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debounce = useDebounce(searchValue, 500)

    const inputRef = useRef();

    useEffect(() => {

        if ( !debounce.trim() ) {
            setSearchResult([])
            return
        }

        setLoading(true)

       fetch(`https://jsonplaceholder.typicode.com/users?q=${encodeURIComponent(debounce)}`)
           .then(res => res.json())
           .then(res => {
               setSearchResult(res)
               setLoading(false)
           })

    }, [debounce])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

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
                                {searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))}
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

                    { !! searchValue && !loading && (
                        <button
                            className="btn-clear"
                            onClick={handleClear}
                        >
                            <FontAwesomeIcon icon={faCircleXmark}/>
                        </button>
                    ) }

                    {loading && (
                        <div className="loading">
                            <FontAwesomeIcon icon={faSpinner}/>
                        </div>
                    )}

                    <button className="btn-search">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    )
}

export default Search