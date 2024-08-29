import { DATA } from "@/constants/Deck";
import { Image, View } from "react-native";
import { Box } from "../Box";
import { Button } from "../Button";
import { Text } from "../Text";

type Props = {
  data: typeof DATA;
};

export const Deck = ({ data }: Props) => {
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
          >
            <Image
              source={{ uri: "https://picsum.photos/300/200" }}
              style={{ width: "auto", height: 200 }}
            />
            <Text marginBottom="s">I can customize the Card further</Text>
            <Button
              backgroundColor="primary"
              label="View Now!"
              onPress={() => {}}
              borderRadius="m"
              padding="s"
            />
          </Box>
        ))}
    </View>
  );
};
