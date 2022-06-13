import React, {
  createContext,
  useState,
  useContext,
  useMemo,
  Context,
} from 'react';
import { useToast } from '@chakra-ui/react';
import { Toast, ToastProps } from '../components/atoms/Toast';

export const OverlayContext: Context<{
  modals: any | null;
  setModals: any | null;
  successToast: any | null;
}> = createContext({
  modals: null,
  setModals: null,
  successToast: null,
});

type IModalsState = {
  [name: string]: boolean;
};

interface OverlayProviderProps {
  modalsState: IModalsState;
  children: any;
}

export const OverlayContextProvider: React.FC<OverlayProviderProps> = ({
  modalsState,
  children,
}: OverlayProviderProps) => {
  const [modals, setModals] = useState<IModalsState>(modalsState);
  const toast = useToast();

  const successToast = ({ title, description }: ToastProps) => {
    toast({
      render: () => (
        <Toast title={title} description={description} type='success' />
      ),
    });
  };

  const OverlayContextProviderValue = useMemo(
    () => ({ modals, setModals, successToast }),
    [modals, setModals, successToast]
  );

  return (
    <OverlayContext.Provider value={OverlayContextProviderValue}>
      {children}
    </OverlayContext.Provider>
  );
};

export default OverlayContextProvider;

export const useOverlay = () => {
  const { modals, setModals, successToast } = useContext(OverlayContext);
  return {
    modals,
    setModals,
    successToast,
  };
};
