import './Poper.scss';

function Wrapper({ children }) {
    return (
        <div className="popper-wrapper">
            {children}
        </div>
    )
}

export default Wrapper;