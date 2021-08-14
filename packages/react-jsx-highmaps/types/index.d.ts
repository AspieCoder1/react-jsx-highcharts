import type * as Highcharts from 'highcharts';
import type { ReactElement, ReactNode } from 'react';
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
}
