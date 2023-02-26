module.exports = {
  trailingComma: "all",
  importOrder: [
    "^react$",
    "^next/(.*)$",
    "<THIRD_PARTY_MODULES>",
    "^@server/(.*)$",
    "^@mui/(.*)$",
    "^@/features/(.*)$",
    "^@/utils/(.*)$",
    "^[./]",
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  plugins: [require.resolve("prettier-plugin-tailwindcss")],
};
