export interface IElectronAPI {
  minimize: () => void;
  toggleMaximize: () => void;
  close: () => void;
}

declare global {
  interface Window {
    electronAPI: IElectronAPI;
  }
}
