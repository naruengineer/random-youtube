import { NextApiRequest, NextApiResponse } from "next";

const YOUTUBE_SEARCH_URL = "https://www.googleapis.com/youtube/v3/search";
const YOUTUBE_VIDEO_DETAILS_URL =
  "https://www.googleapis.com/youtube/v3/videos";
const API_KEY = process.env.YOUTUBE_API_KEY;

export default async function searchVideos(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query,
    publishedAfter,
    maxResults = "5",
    order = "relevance",
    videoDuration = "medium",
  } = req.query;
  //サーチ内容の型を確認
  const queryStr = typeof query === "string" ? query : "";
  const publishedAfterStr =
    typeof publishedAfter === "string" ? publishedAfter : "";
  const maxResultsStr = typeof maxResults === "string" ? maxResults : "5";
  const orderStr = typeof order === "string" ? order : "relevance";
  const videoDurationStr =
    typeof videoDuration === "string" ? videoDuration : "medium";

  // queryStr が空の場合には400 エラーを返す
  if (!queryStr) {
    res.status(400).json({ error: "query parameters error" });
    return;
  }
  //
  try {
    const searchParams = new URLSearchParams({
      part: "snippet",
      q: queryStr,
      type: "video",
      publishedAfter: publishedAfterStr,
      maxResults: maxResultsStr,
      order: orderStr,
      videoDuration: videoDurationStr,
      key: API_KEY as string,
    });

    // パラメータにより検索した動画を JSON 形式で取得
    const response = await fetch(`${YOUTUBE_SEARCH_URL}?${searchParams}`);
    const videoData = await response.json();

    // 取得したデータから各 videoId を取得し文字列作成
    const videoIds = videoData.items
      .map((item: any) => item.id.videoId)
      .join(",");

    // リクエストにより取得したい詳細データを指定
    const detailsParams = new URLSearchParams({
      part: "snippet,statistics",
      id: videoIds,
      key: API_KEY as string,
    });

    // 動画の詳細データを取得
    const detailsResponse = await fetch(
      `${YOUTUBE_VIDEO_DETAILS_URL}?${detailsParams}`
    );
    const detailsData = await detailsResponse.json();

    res.status(200).json(detailsData.items.slice(0, Number(maxResults)));
  } catch (error) {
    console.error("YouTube APIにてエラーが発生:", error);
    res.status(500).json({ error: "Server Error" });
  }
}
