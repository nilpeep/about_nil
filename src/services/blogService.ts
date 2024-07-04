import axios from "axios";

interface Article {
  guid: string;
  title: string;
  link: string;
  pubDate: string;
  description: string;
}

const fetchRSSFeed = async (username: string): Promise<Article[]> => {
  try {
    const response = await axios.get("https://api.rss2json.com/v1/api.json", {
      params: {
        rss_url: `https://medium.com/feed/@${username}`,
      },
    });
    return response.data.items as Article[];
  } catch (error) {
    console.error("Error fetching the RSS feed:", error);
    return [];
  }
};

export default fetchRSSFeed;
export type { Article };
