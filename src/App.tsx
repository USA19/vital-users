//packages block
import { FC } from 'react'
import { SnackbarProvider } from 'notistack';
//components block
import { Routes } from './Routes';
import { CloseButton, SnackbarUtilsConfiguration } from './components/Alert';

const App: FC = (): JSX.Element => {
  return (
    <SnackbarProvider
      maxSnack={5} autoHideDuration={5000} action={key => <CloseButton id={key} />}
      preventDuplicate={true} anchorOrigin={{ vertical: "top", horizontal: "right" }}
      classes={{ containerRoot: 'snackbarProvider' }}
    >
      <SnackbarUtilsConfiguration />
      <Routes />
    </SnackbarProvider>
  )
}

export default App