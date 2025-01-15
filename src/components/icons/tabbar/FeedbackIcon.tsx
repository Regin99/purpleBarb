import Svg, {Path, SvgProps} from 'react-native-svg';

export const FeedbackIcon = (props: SvgProps) => (
  <Svg width={25} height={22} viewBox="0 0 25 22" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.83 1.887a6.118 6.118 0 018.84 0l1.83 1.888 1.83-1.888a6.118 6.118 0 018.84 0c2.44 2.517 2.44 6.597 0 9.113L12.5 22 1.83 11c-2.44-2.516-2.44-6.596 0-9.113z"
      fill={props.color || '#A889FF'}
    />
  </Svg>
);
