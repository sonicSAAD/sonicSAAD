import { COMMANDS, SAAD_ASCII } from "../../constants/cliCommands";

export const executeCliCommand = (cmdStr, { navigate, setIsOpen, triggerReverseWordErase }) => {
  const trimmed = cmdStr.trim().toLowerCase();
  if (!trimmed) return null;

  if (trimmed === "clear" || trimmed === "cls") {
    triggerReverseWordErase();
    return { isClear: true };
  }

  const userEntry = { id: Date.now(), type: "user", text: `saad@neon-grid:~$ ${cmdStr}`, isStreaming: false };
  let responseEntry = null;

  switch (trimmed) {
    case "help":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: Object.entries(COMMANDS).map(([cmd, desc]) => `  ${cmd.padEnd(18)} - ${desc}`).join("\n"),
        isStreaming: true
      };
      break;

    case "saad":
    case "neonfetch":
    case "neofetch":
    case "sysinfo":
      responseEntry = {
        id: Date.now() + 1,
        type: "sys",
        text: SAAD_ASCII,
        isStreaming: true
      };
      break;

    case "whoami":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `Name: Mohammad Saad\nRole: Cyberpunk AI Engineer & Backend Architect\nSpecialization: Multi-Agent Swarms, Zero-Knowledge Privacy, Distributed Systems\nGitHub: http://github.com/sonicSAAD\nLinkedIn: https://www.linkedin.com/in/mohammad-saad-0b7b5b32a/`,
        isStreaming: true
      };
      break;

    case "projects":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[PROJECT] KavachG — Autonomous Edge Industrial Safety CV\n- Stack: Computer Vision, FastAPI, OpenCV, real-time camera feeds\n- Live Preview: https://kavach-g.vercel.app/\n- Repo: https://github.com/sonicSAAD/KavachG\nRouting to /projects...`,
        isStreaming: true
      };
      setTimeout(() => {
        navigate("/projects");
        setIsOpen(false);
      }, 900);
      break;

    case "technologies":
    case "education":
    case "certifications":
    case "achievements":
    case "resume":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[MODULE] Routing to /${trimmed}...`,
        isStreaming: true
      };
      setTimeout(() => {
        navigate(`/${trimmed}`);
        setIsOpen(false);
      }, 700);
      break;

    case "github":
    case "gh":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[GITHUB] http://github.com/sonicSAAD\nOpening Mohammad Saad's GitHub profile in new tab...`,
        isStreaming: true
      };
      setTimeout(() => window.open("http://github.com/sonicSAAD", "_blank"), 500);
      break;

    case "linkedin":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[LINKEDIN] https://www.linkedin.com/in/mohammad-saad-0b7b5b32a/\nOpening verified LinkedIn profile in new tab...`,
        isStreaming: true
      };
      setTimeout(() => window.open("https://www.linkedin.com/in/mohammad-saad-0b7b5b32a/", "_blank"), 500);
      break;

    case "socials":
    case "social":
    case "links":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[VERIFIED PROFESSIONAL CHANNELS]\n- GitHub:    http://github.com/sonicSAAD\n- LinkedIn:  https://www.linkedin.com/in/mohammad-saad-0b7b5b32a/\n- Email:     mailto:mohammadsaad65283@gmail.com`,
        isStreaming: true
      };
      break;

    case "email":
    case "mail":
      responseEntry = {
        id: Date.now() + 1,
        type: "out",
        text: `[EMAIL] Initiating direct transmission to mohammadsaad65283@gmail.com...`,
        isStreaming: true
      };
      setTimeout(() => {
        window.location.href = "mailto:mohammadsaad65283@gmail.com?subject=Engineering%20Inquiry%20-%20Mohammad%20Saad";
      }, 500);
      break;

    case "exit":
    case "quit":
      setIsOpen(false);
      return { isExit: true };

    default:
      responseEntry = {
        id: Date.now() + 1,
        type: "err",
        text: `command not found: "${trimmed}". Type 'help' to inspect available system commands.`,
        isStreaming: true
      };
      break;
  }

  return { userEntry, responseEntry };
};
