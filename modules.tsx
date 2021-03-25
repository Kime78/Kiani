
export function ModulesScreen() {
  search_modules('./Modules');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Modules!</Text>
    </View>
  );
}

