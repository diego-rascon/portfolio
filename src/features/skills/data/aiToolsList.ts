import ClaudeIcon from "@/features/skills/assets/icons/claude-code.svg";
import CursorIcon from "@/features/skills/assets/icons/cursor.svg";
import OpencodeIcon from "@/features/skills/assets/icons/opencode.svg";
import type { Technology } from "@/features/skills/types/Technology";

export const aiToolsList: Technology[] = [
  {
    name: "OpenCode",
    Icon: OpencodeIcon,
  },
  {
    name: "Claude Code",
    Icon: ClaudeIcon,
  },
  {
    name: "Cursor",
    Icon: CursorIcon,
  },
];
