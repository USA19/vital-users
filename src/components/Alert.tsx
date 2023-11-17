
//packages block
import { FC } from "react";
import { ProviderContext, useSnackbar } from "notistack";
//components block
import { AlertCloseIcon } from ".";
//others block
import { CloseSnackbarProps } from "../interface-types";

let useSnackbarRef: ProviderContext;

export const SnackbarUtilsConfiguration: FC = () => {
  useSnackbarRef = useSnackbar();
  return null;
};

export const CloseButton: FC<CloseSnackbarProps> = ({ id }) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <AlertCloseIcon
      color="inherit"
      onClick={() => closeSnackbar(id)}
    >
      &times;
    </AlertCloseIcon>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const Alert = {
  success(message: string) {
    this.toast(message, "success");
  },
  warning(message: string) {
    this.toast(message, "warning");
  },
  info(message: string) {
    this.toast(message, "info");
  },
  error(message: string) {
    this.toast(message, "error");
  },

  toast(message: string, variant: "default" | "error" | "success" | "warning" | "info" = "default") {
    useSnackbarRef.enqueueSnackbar(message, { variant });
  },
};
