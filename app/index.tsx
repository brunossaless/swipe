import { Deck } from "@/components/Deck";
import { DATA } from "@/constants/Deck";
import { SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <Deck data={DATA} />
    </SafeAreaView>
  );
}
