import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  composeRestyleFunctions,
  spacing,
  SpacingProps,
  useRestyle,
} from "@shopify/restyle";
import { TouchableOpacity, View } from "react-native";

import { BaseTheme } from "@/theme";
import { Text } from "../Text";

type RestyleProps = SpacingProps<BaseTheme> &
  BorderProps<BaseTheme> &
  BackgroundColorProps<BaseTheme>;

const restyleFunctions = composeRestyleFunctions<BaseTheme, RestyleProps>([
  spacing,
  border,
  backgroundColor,
]);

type Props = RestyleProps & {
  onPress: () => void;
  label: string;
};

export const Button = ({ onPress, label, ...rest }: Props) => {
  const props = useRestyle(restyleFunctions, rest);

  return (
    <TouchableOpacity onPress={onPress}>
      <View {...props}>
        <Text color={"background"}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};
