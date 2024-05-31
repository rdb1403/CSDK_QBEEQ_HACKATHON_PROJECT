import { createContext } from "react";

export type WidgetContextType = {
  dropdown1: string;
  setDropdown1: React.Dispatch<React.SetStateAction<string>>;
  dropdown2: string;
  setDropdown2: React.Dispatch<React.SetStateAction<string>>;
  dropdown3: string;
  setDropdown3: React.Dispatch<React.SetStateAction<string>>;
  dropdown4: string;
  setDropdown4: React.Dispatch<React.SetStateAction<string>>;
  dropdown5: string;
  setDropdown5: React.Dispatch<React.SetStateAction<string>>;
  dropdown6: string;
  setDropdown6: React.Dispatch<React.SetStateAction<string>>;
  dropdown7: string;
  setDropdown7: React.Dispatch<React.SetStateAction<string>>;
  widgetTitle: string;
  setWidgetTitle: React.Dispatch<React.SetStateAction<string>>;
  widgets: any[];
  setWidgets: React.Dispatch<React.SetStateAction<any[]>>;
  isResized: boolean;
  setResized: React.Dispatch<React.SetStateAction<boolean>>;
  dialogTitle1: string;
  setDialogTitle1: React.Dispatch<React.SetStateAction<string>>;
  dialogTitle2: string;
  setDialogTitle2: React.Dispatch<React.SetStateAction<string>>;
  dialogTitle3: string;
  setDialogTitle3: React.Dispatch<React.SetStateAction<string>>;
  dialogTitle4: string;
  setDialogTitle4: React.Dispatch<React.SetStateAction<string>>;
  dialogTitle5: string;
  setDialogTitle5: React.Dispatch<React.SetStateAction<string>>;
  dialogTitle6: string;
  setDialogTitle6: React.Dispatch<React.SetStateAction<string>>;
  dialogTitle7: string;
  setDialogTitle7: React.Dispatch<React.SetStateAction<string>>;
  dialogTitle8: string;
  setDialogTitle8: React.Dispatch<React.SetStateAction<string>>;
  rerenderVal: number;
  setRerenderVal: React.Dispatch<React.SetStateAction<number>>;


};

const widgetContext = createContext<WidgetContextType | null>(null);

export default widgetContext;
