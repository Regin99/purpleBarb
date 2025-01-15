import Svg, {Rect, Circle, SvgProps} from 'react-native-svg';

export const RadioChecked = (props: SvgProps) => (
  <Svg width={20} height={20} viewBox="0 0 20 20" fill="none">
    <Rect
      x={1}
      y={1}
      width={18}
      height={18}
      rx={9}
      stroke={props.color || '#EBEDF0'}
      strokeWidth={2}
    />
    <Circle
      cx={10}
      cy={10}
      r={5}
      fill={props.color || '#fff'}
      stroke={props.color || '#fff'}
      strokeWidth={2}
    />
  </Svg>
);
