module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./src"],
          alias: {
            "@": "./src",
            
            "@context": "./src/context",
            "@navigation": "./src/navigation",
            "@utils": "./src/utils",
            "@styles": "./src/styles",
            "@components": "./src/components",
            "@database": "./src/utils/database",
            "@scripts": "./src/scripts",

            "@assets": "./assets",
            
            "@fonts": "./fonts",
            "@montserrat": "./fonts/montserrat",
            "@roboto": "./fonts/roboto",
            "@robotoCondensed": "./fonts/robotoCondensed",
            "@robotoMono": "./fonts/robotoMono",
            "@robotoSerif": "./fonts/robotoSerif",
            "@robotoSlab": "./fonts/robotoSlab",
          },
        },
      ],
    ],
  };
};
