import { Button, Popconfirm, type ButtonProps } from "antd";
import type { ReactNode } from "react";

interface ConfirmButtonProps extends Omit<ButtonProps, "onClick"> {
  confirmTitle: string;
  confirmDescription?: string;
  onConfirm: () => void;
  children: ReactNode;
  confirmText?: string;
  cancelText?: string;
}

/** Wraps any destructive/irreversible action in a confirmation prompt. */
export default function ConfirmButton({
  confirmTitle,
  confirmDescription,
  onConfirm,
  children,
  confirmText = "Xác nhận",
  cancelText = "Hủy",
  ...buttonProps
}: ConfirmButtonProps) {
  return (
    <Popconfirm
      title={confirmTitle}
      description={confirmDescription}
      onConfirm={onConfirm}
      okText={confirmText}
      cancelText={cancelText}
      okButtonProps={{ danger: buttonProps.danger }}
    >
      <Button {...buttonProps}>{children}</Button>
    </Popconfirm>
  );
}
