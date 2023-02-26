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

const SideBar = () => {
    const [rootArrow, setRootArrow] = useState(false);
    const [childArrow, setChildArrow] = useState(false);
    const [chindFolderName, setChindFolderName] = useState("");

    const handleChildArror = (id) => {
        console.log("id", id);
        setChindFolderName(id);
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
                                folderName={folder?.name}
                                folder={folder}
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
                                    <Folder
                                        isInerChildren
                                        folder={childFolder}
                                        folderIcon={childfolderIcon}
                                        createIcon={createFolderIcon}
                                        deleteIcon={deleteFolderIcon}
                                        folderName={childFolder?.name}
                                        arrowState={rootArrow}
                                        // arrowHandler={setChildArrow}
                                        arrowIcon={
                                            rootArrow
                                                ? downArrowIcon
                                                : arrowIcon
                                        }
                                        inerChildClass="inerChildFolder"
                                    />
                                ))}
                        </>
                    ))}
            </div>
        </SideBarStyled>
    );
};

export default SideBar;
