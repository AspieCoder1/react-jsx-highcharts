import { useContext, useState, useDebugValue } from 'react';
import AxisContext from '../AxisContext';
import useChart from '../UseChart';
import createProvidedAxis from '../Axis/createProvidedAxis';
import useDelayOnce from '../UseDelayOnce';

export default function useAxis(axisId) {
  const chart = useChart();
  const contextAxis = useContext(AxisContext);

  const createStateAxis = () => {
    if (contextAxis) return contextAxis;

    if (axisId) {
      const axis = chart.get(axisId);
      return createProvidedAxis(axis);
    }
    return null;
  };

  const [providedAxis, setProvidedAxis] = useState(createStateAxis);
  useDelayOnce(() => {
    if (providedAxis) return; // we already had axis
    // axis should now be created
    setProvidedAxis(createStateAxis());
  });
  useDebugValue(providedAxis ? providedAxis.id : null);

  return providedAxis;
}