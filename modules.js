const fs  = require('fs');

function search_modules(path) {
    // fs.ls(path).then(files => {
    //     console.log(files);
    //   }).catch(error => console.log(error));
}

export function ModulesScreen() {
  search_modules('./Modules');
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Modules!</Text>
    </View>
  );
}

