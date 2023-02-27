import React from "react";
import { FOLDER } from "../Navbar/SideBarStyled";
import createFolderIcon from "../../Assets/Carete.png";
import deleteFolderIcon from "../../Assets/trash.png";

const Folder = ({
    isRoot,
    folderIcon,
    folderName,
    arrowHandler,
    arrowIcon,
    arrowState,
    childClass,
    handleChildArror,
    isChildren,
    isInerChildren,
    inerChildClass,
    isInerMoreChildren,
    folder,
    inerChildMoreClass,
    openModal,
    deleteFolder,
}) => {
    console.log("folder", handleChildArror);

    return (
        <FOLDER
            className={`${isChildren && childClass} ${
                isInerChildren && inerChildClass
            } ${isInerMoreChildren && inerChildMoreClass}`}
        >
            <div className="flexCenter">
                {folder?.children?.length > 0 && (
                    <img
                        src={arrowIcon}
                        onClick={() => {
                            arrowHandler(!arrowState);
                            handleChildArror(folderName);
                        }}
                        alt="arrow"
                        className="arrowIcon"
                    />
                )}
                <img src={folderIcon} alt="rootFolder" />
                <p>{folderName}</p>
            </div>
            <div>
                <img
                    onClick={openModal}
                    className="childFolderImg"
                    src={createFolderIcon}
                    alt="carete Folder"
                />
                {!isRoot && (
                    <img
                        onClick={() => deleteFolder(folder)}
                        className="childFolderImg"
                        src={deleteFolderIcon}
                        alt="trash Folder"
                    />
                )}
            </div>
        </FOLDER>
    );
};

export default Folder;
