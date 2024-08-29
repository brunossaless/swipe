import { Deck } from "@/components/Deck";
import { DATA } from "@/constants/Deck";
import { SafeAreaView, ScrollView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <ScrollView>
        <Deck data={DATA} />
      </ScrollView>
    </SafeAreaView>
  );
}
