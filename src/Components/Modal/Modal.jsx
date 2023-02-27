import { useRef } from "react";

import { ModalStyled } from "./ModalStyled";
import "./Modal.css";
import closeIncon from "../../Assets/remove.png";
import Button from "../Button/Button";

const Modal = ({ hideModal, title, folderDetails }) => {
    const modalRef = useRef(null);

    const handleCloseModal = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            hideModal();
        }
    };

    return (
        <ModalStyled onClick={handleCloseModal}>
            <div className="inerModal" ref={modalRef}>
                <div className="modal-head">
                    <h2>{title}</h2>
                    <div className="modal-close-icon">
                        <img
                            onClick={hideModal}
                            src={closeIncon}
                            alt="remove icon"
                        />
                    </div>
                </div>
                {title === "Create Folder" && (
                    <div className="modal-content">
                        <label htmlFor="">Enter Folder Name</label>
                        <input placeholder="Enter Folder Name" type="text" />
                    </div>
                )}
                {title === "Delete Folder" && (
                    <div className="modal-content">
                        <h2>
                            Are you sure you want to delete{" "}
                            <span>{folderDetails.name}</span> folder?
                        </h2>
                    </div>
                )}
                <div className="modal-footer">
                    {title === "Create Folder" ? (
                        <div>
                            <Button
                                title="Craete"
                                handleClick={hideModal}
                                classStyle="btnColorPrimary"
                            />
                        </div>
                    ) : (
                        <>
                            <div className="modal-yes-btn">
                                <Button
                                    title="Yes"
                                    handleClick={hideModal}
                                    classStyle="btnColorPrimary"
                                />
                            </div>
                            <div>
                                <Button title="No" handleClick={hideModal} />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </ModalStyled>
    );
};

export default Modal;
