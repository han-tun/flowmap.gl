import {LocationFilterMode, ViewportProps} from './types';

export interface FilterState {
  selectedLocations?: string[];
  locationFilterMode?: LocationFilterMode;
  selectedTimeRange?: [Date, Date];
}

export interface SettingsState {
  animationEnabled: boolean;
  fadeEnabled: boolean;
  fadeOpacityEnabled: boolean;
  locationTotalsEnabled: boolean;
  adaptiveScalesEnabled: boolean;
  clusteringEnabled: boolean;
  clusteringAuto: boolean;
  clusteringLevel?: number;
  darkMode: boolean;
  fadeAmount: number;
  colorScheme: string | string[] | undefined;
  highlightColor: string;
  maxTopFlowsDisplayNum: number;
}

export interface FlowmapState {
  filterState?: FilterState;
  settingsState: SettingsState;
  viewport: ViewportProps;
}
