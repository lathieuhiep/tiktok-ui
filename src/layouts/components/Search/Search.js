import {useEffect, useRef, useState} from "react";
import HeadlessTippy from "@tippyjs/react/headless";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faSearch, faSpinner} from "@fortawesome/free-solid-svg-icons";

import * as searchServices from "~/services/searchServices";

import {Wrapper as PopperWrapper} from "~/components/Popper";
import AccountItem from "~/components/AccountItem";
import { useDebounce } from "~/hooks";

function Search() {
    const [searchValue, setSearchValue] = useState('')
    const [searchResult, setSearchResult] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)

    const debounceValue = useDebounce(searchValue)

    const inputRef = useRef();

    useEffect(() => {

        if ( !debounceValue.trim() ) {
            setSearchResult([])
            return
        }

        setLoading(true)

        // call api user
        const fetchApi = async () => {
            const result = await searchServices.search(debounceValue)
            setSearchResult(result)

            setLoading(false)
        }

        fetchApi()

    }, [debounceValue])

    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }

    const handleHideResult = () => {
        setShowResult(false)
    }

    const handleChange = (e) => {
        const searchValue = e.target.value

        if ( !searchValue.startsWith(' ') ) {
            setSearchValue(searchValue)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault()
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
                        onChange={handleChange}
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

                    <button className="btn-search" onMouseDown={handleSubmit}>
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </form>
            </HeadlessTippy>
        </div>
    )
}

export default Search