export const SITE_TITLE = "flawerdev";
export const SITE_DESCRIPTION =
  `flawerdev's portfolio`.trim();

export const KNOWN_TECH =
  `
  Python,Javascript,HTML,CSS,React,Typescript,Django,SQL,PostgreSQL`.split(
    ",",
  );
export const ABOUT_ME =
  `Hi! i'm flawer. I’m a software developer based in Chile (they/them) with a background in English teaching. I discovered coding during the pandemic through Twitch’s live study and coworking communities which inspired me to switch paths. I enjoy building thoughtful, practical projects and have ideas in my own way and at my own pace. I’m passionate about learning and growing every day. Beyond coding, I love music, curating playlists, and sharing guitar covers. My goal is to create a cozy, welcoming space where tech, creativity, and curiosity come together.`.trim();
export const GITHUB_USERNAME = "flawerdev";
export const QUOTE = "Programmer, Gamer, Streamer";
export const NAV_LINKS: Array<{ title: string; href?: string }> = [
    {
    title: "About Me",
    href: "#about-me"
  },
  {
    title: "Blog",
  },
  {
    title: "Github",
    href: "//github.com/" + GITHUB_USERNAME,
  },
  {
    title: "Source",
    href: "//github.com/ArnavK-09/token-template",
  },
];

export const MY_PROJECTS: Array<{
  title: string;
  description: string;
  link: string;
  image?: string;
}> = [
  {
    title: "Task List",
    description: "Manage tasks by adding, editing, completing, and deleting them, with all the data saved in the browser. Built with HTML, CSS, and JavaScript.",
    link: `https://github.com/${GITHUB_USERNAME}/todo-list`,
  },
  {
    title: "Weather App",
    description: "Check the current weather of any city with temperature, description, and icons, using the OpenWeather API. Built with HTML, CSS, and JavaScript(Vite) and designed for easy deployment.",
    link: `https://github.com/${GITHUB_USERNAME}/weather-app`,
  },
]
