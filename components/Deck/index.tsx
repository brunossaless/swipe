import { DATA } from "@/constants/Deck";
import { Box } from "../Box";
import { CardPhotoText } from "../CardPhotoText";
import { Text } from "../Text";

type Props = {
  data: typeof DATA;
};

export const Deck = ({ data }: Props) => {
  return (
    <Box padding={"s"} gap={"m"}>
      <Text
        color={"text"}
        fontSize={18}
        fontWeight={"bold"}
        paddingBottom={"s"}
      >
        Swipe left or right to move elements.
      </Text>
      {data.map((item) => (
        <CardPhotoText key={item.id} id={item.id} text={item.text} />
      ))}
    </Box>
  );
};
