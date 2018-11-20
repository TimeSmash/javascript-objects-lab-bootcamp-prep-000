var recipes = {flour: "1 cup", eggs: "2"};

function updateOpbjectWithKeyAndValue(object, key, value) {
Object.assign({}, object, {key: value});
  return object;
}

