import { Spinner } from "reactstrap";

export const CustomSpinner = () => {
    return (
        <>
            <Spinner
                as="span"
                variant="light"
                size="sm"
                role="status"
                aria-hidden="true"
                animation="border"
                className='spinner-center'
            />
        </>
    )
}
