import Svg, {Path, SvgProps} from 'react-native-svg';

export const ProfileIcon = (props: SvgProps) => (
  <Svg width={27} height={27} viewBox="0 0 27 27" fill="none" {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M27 13.5C27 20.956 20.956 27 13.5 27S0 20.956 0 13.5 6.044 0 13.5 0 27 6.044 27 13.5zM16.875 8.437a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm-3.375 6.75a8.439 8.439 0 00-7.672 4.92 10.102 10.102 0 007.672 3.518c3.067 0 5.815-1.363 7.672-3.517a8.439 8.439 0 00-7.672-4.92z"
      fill={props.color || '#A889FF'}
    />
  </Svg>
);
