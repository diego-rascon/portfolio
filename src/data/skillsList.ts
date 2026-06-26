import type { Skill } from "@/types/Skill";

export const skillsList = {
  docker: {
    name: "Docker",
    backgroundColor: "bg-blue-950",
    textColor: "text-blue-300",
  },
  elixir: {
    name: "Elixir",
    backgroundColor: "bg-violet-950",
    textColor: "text-violet-300",
  },
  jwt: {
    name: "JWT",
    backgroundColor: "bg-fuchsia-950",
    textColor: "text-fuchsia-300",
  },
  mysql: {
    name: "MySQL",
    backgroundColor: "bg-sky-950",
    textColor: "text-sky-300",
  },
  nextjs: {
    name: "Next.js",
    backgroundColor: "bg-mist-800",
    textColor: "text-mist-300",
  },
  oracleDatabse: {
    name: "Oracle Database",
    backgroundColor: "bg-red-950",
    textColor: "text-red-300",
  },
  python: {
    name: "Python",
    backgroundColor: "bg-yellow-950",
    textColor: "text-yellow-300",
  },
  reactNative: {
    name: "React Native",
    backgroundColor: "bg-cyan-950",
    textColor: "text-cyan-300",
  },
  redis: {
    name: "Redis",
    backgroundColor: "bg-orange-950",
    textColor: "text-orange-300",
  },
  spring: {
    name: "Spring Boot",
    backgroundColor: "bg-green-950",
    textColor: "text-green-300",
  },
} satisfies Record<string, Skill>;
