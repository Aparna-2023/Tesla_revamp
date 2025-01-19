import { Modal, ModalBody, ModalHeader } from "reactstrap"

export const ModalContainer = ({ isOpen, setIsopen, title = "", children, classname }) => {
    return (
        <Modal
            isOpen={isOpen}
            scrollable={true}
            centered={true}
            toggle={() => setIsopen(false)}
            className= {classname}
        >
            <ModalHeader toggle={() => setIsopen(false)}>{title}

            </ModalHeader>
            <ModalBody>{children}</ModalBody>
        </Modal>
    )
}