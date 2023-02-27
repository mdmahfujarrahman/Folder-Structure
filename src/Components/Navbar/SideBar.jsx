import React, { useState } from "react";

import { Logo, SideBarStyled } from "./SideBarStyled";
import rootfolderIcon from "../../Assets/Root Folder.png";
import childfolderIcon from "../../Assets/folder.png";
import createFolderIcon from "../../Assets/Carete.png";
import deleteFolderIcon from "../../Assets/trash.png";
import arrowIcon from "../../Assets/arrow.png";
import downArrowIcon from "../../Assets/down.png";
import { FolderStructure } from "../../Mock/MockData";
import Folder from "../Folder/Folder";
import Modal from "../Modal/Modal";

const SideBar = () => {
    const [careteModal, setCraeteModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [rootArrow, setRootArrow] = useState(false);
    const [folderDetails, setFolderDetails] = useState({});
    const [childArrow, setChildArrow] = useState(false);
    const [inerChildArrow, setInerChildArrow] = useState(false);
    const [chindFolderName, setChindFolderName] = useState("");
    const [chindInerFolderName, setChindInerFolderName] = useState("");

    const handleChildArror = (id) => {
        setChindFolderName(id);
    };

    const handleInerChildArror = (id) => {
        setChindInerFolderName(id);
    };

    const handleDelete = (data) => {
        setFolderDetails(data);
        setDeleteModal(true);
    };

    return (
        <SideBarStyled>
            <Logo>
                {" "}
                <span> Folder</span> Structure
            </Logo>
            <hr />
            <div>
                <Folder
                    isRoot
                    folderIcon={rootfolderIcon}
                    createIcon={createFolderIcon}
                    deleteIcon={deleteFolderIcon}
                    folderName="Root"
                    openModal={() => setCraeteModal(true)}
                    folder={FolderStructure}
                    arrowState={rootArrow}
                    arrowHandler={setRootArrow}
                    arrowIcon={rootArrow ? downArrowIcon : arrowIcon}
                />

                {rootArrow &&
                    FolderStructure.children.map((folder) => (
                        <>
                            <Folder
                                isChildren
                                folderIcon={childfolderIcon}
                                createIcon={createFolderIcon}
                                deleteIcon={deleteFolderIcon}
                                deleteFolder={handleDelete}
                                folderName={folder?.name}
                                folder={folder}
                                openModal={() => setCraeteModal(true)}
                                handleChildArror={handleChildArror}
                                arrowState={childArrow}
                                arrowHandler={setChildArrow}
                                arrowIcon={
                                    chindFolderName === folder?.name &&
                                    childArrow
                                        ? downArrowIcon
                                        : arrowIcon
                                }
                                childClassImage="childFolderImg"
                                childClass="childFolder"
                            />
                            {chindFolderName === folder?.name &&
                                childArrow &&
                                folder.children.length > 0 &&
                                folder.children.map((childFolder) => (
                                    <>
                                        <Folder
                                            isInerChildren
                                            folder={childFolder}
                                            deleteFolder={handleDelete}
                                            folderIcon={childfolderIcon}
                                            createIcon={createFolderIcon}
                                            deleteIcon={deleteFolderIcon}
                                            openModal={() =>
                                                setCraeteModal(true)
                                            }
                                            folderName={childFolder?.name}
                                            arrowState={inerChildArrow}
                                            handleChildArror={
                                                handleInerChildArror
                                            }
                                            arrowHandler={setInerChildArrow}
                                            arrowIcon={
                                                inerChildArrow
                                                    ? downArrowIcon
                                                    : arrowIcon
                                            }
                                            inerChildClass="inerChildFolder"
                                        />
                                        {chindInerFolderName ===
                                            childFolder?.name &&
                                            inerChildArrow &&
                                            childFolder.children.length > 0 &&
                                            childFolder.children.map(
                                                (inerChildFolder) => (
                                                    <Folder
                                                        isInerMoreChildren
                                                        folder={inerChildFolder}
                                                        folderIcon={
                                                            childfolderIcon
                                                        }
                                                        deleteFolder={
                                                            handleDelete
                                                        }
                                                        createIcon={
                                                            createFolderIcon
                                                        }
                                                        deleteIcon={
                                                            deleteFolderIcon
                                                        }
                                                        openModal={() =>
                                                            setCraeteModal(true)
                                                        }
                                                        folderName={
                                                            inerChildFolder?.name
                                                        }
                                                        arrowState={
                                                            inerChildArrow
                                                        }
                                                        arrowHandler={
                                                            setInerChildArrow
                                                        }
                                                        arrowIcon={
                                                            inerChildArrow
                                                                ? downArrowIcon
                                                                : arrowIcon
                                                        }
                                                        inerChildMoreClass="inerChildMoreClass"
                                                    />
                                                )
                                            )}
                                    </>
                                ))}
                        </>
                    ))}
                {careteModal && (
                    <Modal
                        title="Create Folder"
                        hideModal={() => setCraeteModal(false)}
                    />
                )}
                {deleteModal && (
                    <Modal
                        folderDetails={folderDetails}
                        title="Delete Folder"
                        hideModal={() => setDeleteModal(false)}
                    />
                )}
            </div>
        </SideBarStyled>
    );
};

export default SideBar;
