import Image from "next/image";
import { Video } from "@/app/types/Video";

type VideosCardProps = {
  video: Video;
};

const VideosCard: React.FC<VideosCardProps> = ({ video }) => {
  // 文字列を指定した長さに切り取る
  const truncateString = (str: string, maxLength: number) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
  };
  return (
    <div
      key={video.id}
      className="bg-white p-10 w-200 shadow-md rounded-lg animate-scale-in-center-1 mb-10 flex flex-col items-center justify-center"
    >
      <a
        href={`https://www.youtube.com/watch?v=${video.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col items-center justify-center"
      >
        <Image
          src={video.snippet.thumbnails.high?.url || "/default-thumbnail.jpg"}
          alt={video.snippet.title}
          width={500}
          height={360}
          className="mb-4"
        />
        <h4 className="text-lg font-semibold underline">
          {truncateString(video.snippet.title, 30)}
        </h4>
        <div className="flex max-w-160">
          <div className="mr-5">
            <p className="text-sm font-semibold text-gray-600">チャンネル:</p>
            <p className="text-sm font-semibold text-gray-600">説明:</p>
            <p className="text-sm font-semibold text-gray-600">再生回数:</p>
            <p className="text-sm font-semibold text-gray-600">
              アップロード日:
            </p>
          </div>
          <div className="">
            <p className="text-sm text-gray-600">
              {video.snippet.channelTitle}
            </p>
            <p className="text-sm text-gray-600">
              {truncateString(video.snippet.description, 35) || "無し"}
            </p>
            <p className="text-sm text-gray-600">
              {parseInt(video.statistics.viewCount, 10).toLocaleString()}回
            </p>
            <p className="text-sm text-gray-600">
              {new Date(video.snippet.publishedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideosCard;
