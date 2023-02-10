/** @type {import("prettier").Config} */
module.exports = {
  printWidth: 80,
  tabWidth: 2,
  trailingComma: "all",
  semi: true,
  importOrder: [
    "^@core/(.*)$",
    "next/",
    "<THIRD_PARTY_MODULES>",
    "^@server/(.*)$",
    "^@mui/(.*)$",
    "@/components/",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [
    require.resolve(
      "prettier-plugin-tailwindcss",
    ),
  ],
};
