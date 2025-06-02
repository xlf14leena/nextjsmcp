import { createMcpHandler } from "@vercel/mcp-adapter";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "courseRecommender",
      "Give a course recommendation based on experience level",
      {
        experienceLevel: z.enum(["beginner", "intermediate"]),
      },
      ({ experienceLevel }) => ({
        content: [
          {
            type: "text",
            text: `I recommend you take the ${
              experienceLevel === "beginner"
                ? "Professional JavaScript"
                : "Professional React & Next.js"
            } course.`,
          },
        ],
      })
    );
  },
  {
    capabilities: {
      tools: {
        courseRecommender: {
          description: "Give a course recommendation based on experience level",
        },
      },
    },
  }
);

export { handler as GET, handler as POST, handler as DELETE };