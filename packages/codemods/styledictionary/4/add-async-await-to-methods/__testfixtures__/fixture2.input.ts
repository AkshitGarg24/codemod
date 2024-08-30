import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({ source: ['tokens.json'], platforms: {} });
console.log(sd.tokens);

sd.exportPlatform('web');