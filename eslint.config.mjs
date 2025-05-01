import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Adicionando configurações de regras personalizadas
    rules: {
      "no-console": "off", // Desabilita a regra no-console (permitindo console.log)
      "react/no-unused-prop-types": "off", // Desabilita a regra de tipos não usados nas props
    }
  }
];

export default eslintConfig;
