import esbuild from "esbuild";

export default function(eleventyConfig) {
  eleventyConfig.addTemplateFormats("ts");
  eleventyConfig.addExtension("ts", {
    outputFileExtension: "js",
    compile: async (contents, inputPath) => {
      return async () => {
        const result = await esbuild.transform(contents, {
          loader: "ts",
          format: "esm",
          sourcemap: "inline",
          target: "es2020",
          minify: false,
        });
        return result.code;
      };
    },
  });

  eleventyConfig.addPassthroughCopy({ "admin": "admin" });
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  //eleventyConfig.addPassthroughCopy({ "public": "public" });

};
