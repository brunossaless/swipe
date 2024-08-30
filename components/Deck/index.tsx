import { DATA } from "@/constants/Deck";
import { Image, PanResponder, View } from "react-native";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

type Props = {
  data: typeof DATA;
};

export const Deck = ({ data }: Props) => {
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => {
      return true;
    },
    onPanResponderMove: (event, gestureState) => {},
    onPanResponderRelease: (event, gestureState) => {},
  });

  return (
    <View style={{ padding: 10 }}>
      {data.length > 1 &&
        data.map((item) => (
          <Box
            borderWidth={1}
            borderColor="primary"
            key={item.id}
            padding="m"
            marginBottom="m"
            gap={"s"}
            borderRadius="s"
          >
            <Image
              source={{
                uri: `https://picsum.photos/300/200?random=${Math.random()}`,
              }}
              style={{ width: "auto", height: 200, borderRadius: 4 }}
            />
            <Text marginBottom="s">I can customize the Card further</Text>
            <Button
              backgroundColor="primary"
              label="View Now!"
              onPress={() => {}}
              borderRadius="s"
              padding="s"
            />
          </Box>
        ))}
    </View>
  );
};
