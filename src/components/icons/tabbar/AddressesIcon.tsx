import Svg, {Path, SvgProps} from 'react-native-svg';

export const AddressesIcon = (props: SvgProps) => (
  <Svg width={20} height={25} viewBox="0 0 20 25" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.929 3.033c3.905-4.044 10.237-4.044 14.142 0 3.905 4.044 3.905 10.6 0 14.645L10 25l-7.071-7.322c-3.905-4.044-3.905-10.601 0-14.645zM10 13.314c1.578 0 2.857-1.325 2.857-2.959 0-1.634-1.279-2.958-2.857-2.958-1.578 0-2.857 1.324-2.857 2.958 0 1.634 1.279 2.959 2.857 2.959z"
      fill={props.color || '#A889FF'}
    />
  </Svg>
);
