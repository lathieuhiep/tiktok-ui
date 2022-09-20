import Button from "../../Button";

function MenuItem({ data, onClick }) {
    return (
        <Button leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    )
}

export default MenuItem