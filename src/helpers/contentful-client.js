import { createClient } from "contentful";

export const contentfulClient = () =>
  createClient({
    // space: "kr4eoi7ww9bx",
    // accessToken: "ik8zTxQwTcAZEmiiLIt9mFTTcpGAPH3_wTbQ5GlmvCI",
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
