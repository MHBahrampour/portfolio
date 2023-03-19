module.exports =
  {
    trailingComma:
      "all",
    printWidth: 80,
    tabWidth: 2,
    importOrder:
      [
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
    plugins:
      [
        require.resolve(
          "prettier-plugin-tailwindcss",
        ),
      ],
  };
