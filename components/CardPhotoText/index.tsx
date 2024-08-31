import { useMemo } from "react";
import { Animated, Image, PanResponder } from "react-native";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

type Props = {
  id: number;
  text: string;
};

export const CardPhotoText = ({ text }: Props) => {
  const position = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      return true;
    },
    onPanResponderMove: (event, gestureState) => {
      position.setValue({ x: gestureState.dx, y: gestureState.dy });
    },
    onPanResponderRelease: (event, gestureState) => {},
  });

  const cardStyle = useMemo(() => {
    const rotate = position.x.interpolate({
      inputRange: [-500, 0, 500],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  }, [position]);

  return (
    <Animated.View style={cardStyle} {...panResponder.panHandlers}>
      <Box
        borderWidth={1}
        borderColor="primary"
        padding="m"
        gap={"s"}
        borderRadius="s"
      >
        <Text marginBottom="s">{text}</Text>
        <Image
          source={{
            uri: `https://picsum.photos/300/200?random=${Math.random()}`,
          }}
          style={{ width: "auto", height: 200, borderRadius: 4 }}
        />
        <Button
          backgroundColor="primary"
          label="View Now!"
          onPress={() => {}}
          borderRadius="s"
          padding="s"
        />
      </Box>
    </Animated.View>
  );
};
