import type * as Highcharts from 'highcharts';
import type { ReactElement, ReactNode } from 'react';
import * as React from 'react';
import type { HighchartsChartProps, SeriesProps } from 'react-jsx-highcharts';

export * from 'react-jsx-highcharts';

type HighchartsMapChartsProps = HighchartsChartProps & {
  map: Highcharts.GeoJSON;
};

export function HighchartsMapChart(
  props: HighchartsMapChartsProps
): ReactElement;

// Series
export function MapSeries(
  props: SeriesProps<Highcharts.SeriesMapOptions>
): ReactElement;

export function MapPointSeries(
  props: SeriesProps<Highcharts.SeriesMappointOptions>
): ReactElement;

export function MapLineSeries(
  props: SeriesProps<Highcharts.SeriesMaplineOptions>
): ReactElement;

export function MapBubbleSeries(
  props: SeriesProps<Highcharts.SeriesMapbubbleOptions>
): ReactElement;

// map navigator
type MapNavigatorProps = {
  children?: ReactNode;
} & Partial<Highcharts.MapNavigationOptions>;
export function MapNavigator(props: MapNavigatorProps): ReactElement;
export namespace MapNavigator {
  type ZoomInButtonProps = { children?: ReactNode } & Omit<
    Highcharts.MapNavigationButtonsZoomInOptions,
    'text'
  >;
  export function ZoomIn(props: ZoomInButtonProps): ReactElement;

  type ZoomOutButtonProps = { children?: ReactNode } & Omit<
    Highcharts.MapNavigationButtonsZoomInOptions,
    'text'
  >;
  export function ZoomOut(props: ZoomOutButtonProps): ReactElement;

  type MapButtonProps = {
    children?: ReactNode;
    type: 'zoomIn' | 'zoomOut';
  } & Omit<Highcharts.MapNavigationButtonOptions, 'text'>;
  export function Button(props: MapButtonProps): ReactElement;
}

// Axis components
type AxisProps = {
  endOnTick: boolean;
  visible: boolean;
  minPadding: number;
  maxPadding: number;
  startOnTick: boolean;
  reversed: boolean;
} & Highcharts.AxisOptions;

export function XAxis(props: AxisProps): ReactElement;
export function YAxis(props: AxisProps): ReactElement;
