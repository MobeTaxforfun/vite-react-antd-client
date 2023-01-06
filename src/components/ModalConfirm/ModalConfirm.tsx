import { ExclamationCircleFilled } from "@ant-design/icons";
import { Modal } from "antd";
import React, { FC } from "react";

export interface IModalConfirm {
    // 需要把 submit openModal 傳進來
    modalOpen: boolean;
    onChangeModal: () => void;
    // 把確定事件傳進來
    onBtnOk: () => void;
    // 標題
    title: string;
    // 內容
    content: string;
}

const ModalConfirm: FC<IModalConfirm> = ({
    modalOpen,
    onChangeModal,
    onBtnOk,
    title,
    content
}) => {
    return (
        <React.Fragment>
            <Modal
                title={<><ExclamationCircleFilled style={{ color: "#FF8C00" }} />&nbsp;&nbsp;{title}</>}
                open={modalOpen}
                onOk={onBtnOk}
                onCancel={onChangeModal}
                okText='確定'
                cancelText='取消'
            >
                <span>{content}</span>
            </Modal>
        </React.Fragment>
    )
}

export default ModalConfirm