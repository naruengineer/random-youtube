"use client";

import React from "react";
import { Select } from "@chakra-ui/react";
import { useState } from "react";
import { Keywords } from "../components/Keywords/Keywords";
import Loading from "./Loading";
import VideosCard from "../components/VideosCard/VideosCard";
import { Video } from "../types/Video";
import ErrorModal from "../components/Modal/ErrorModal";

const Mainpage: React.FC = () => {
  const [keyword, setKeyword] = useState("");
  const [clickLimit, setClickLimit] = useState(0);
  const [searchClick, setSearchClick] = useState(false);
  const [selectedDate, setSelectedDate] = useState("all");
  const [selectedOrder, setSelectedOrder] = useState("relevance");
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //日付を取得
  const now = new Date();
  //今日の分
  const startOfToday = new Date(now.setHours(0, 0, 0, 0));
  const startOfTodayRFC3339 = startOfToday.toISOString();
  //今月の分
  const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
  const startOfMonthRFC3339 = startOfMonth.toISOString();
  //今年の分
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const startOfYearRFC3339 = startOfYear.toISOString();

  //キーワード生成ボタンの処理　//ランダムに生成している動きをつける
  const handleRandomKeyword = () => {
    let randomIndex;
    randomIndex = Math.floor(Math.random() * Keywords.length);
    setKeyword(Keywords[randomIndex].Keyword);
    setClickLimit(clickLimit + 1);
  };
  //キーワードとタブの中身を確認して
  const checkInputs = () => {
    if (!keyword || !selectedDate || !selectedOrder) {
      return false;
    }
    return true;
  };

  //検索ボタンの処理
  const handleSearch = async () => {
    //タブとキーワードのいずれかが選択されていない場合はモーダルを表示
    if (!checkInputs()) {
      setIsModalOpen(true);
      return;
    }
    //ローディング表示
    setLoading(true);
    try {
      const response = await fetch(
        //クエリとオーダーはエンコードする必要あり
        `/api/search?query=${encodeURIComponent(
          keyword
        )}&publishedAfter=${selectedDate}&maxResults=5&order=${encodeURIComponent(
          selectedOrder
        )}`
      );
      //APIから帰ってきたデータをJSON形式でVideosへ格納
      const data: Video[] = await response.json();
      setVideos(data);
      setSearchClick(true);
    } catch (error) {
      console.error("動画の取得時にエラーが発生しました:", error);
    }
    setLoading(false);
  };

  return (
    <div>
      <div className="w-full flex-col items-center justify-center px-4 xl:px-28 pt-10 bg-yellow-200">
        <div className="flex flex-col items-center justify-center">
          <h2 className="font-bold text-xl underline mb-3">検索キーワード</h2>
          <div className="flex flex-col items-center justify-center">
            <div className="h-16 w-80 sm:w-104 border-2 border-black bg-white">
              <p className="text-2xl md:text-4xl text-center pt-3">{keyword}</p>
            </div>
            <button
              className={
                clickLimit < 3
                  ? "bg-blue-500 text-white font-semibold rounded-lg p-2 mt-2"
                  : "text-white bg-gray-500 font-semibold rounded-lg p-2 mt-2"
              }
              onClick={handleRandomKeyword}
              disabled={clickLimit > 3}
            >
              キーワード生成
            </button>
            {clickLimit < 3 ? (
              <p className="text-gray-500">※キーワード生成は3度まで可能です</p>
            ) : (
              <p className="text-red-500">※キーワード生成は3度まで可能です</p>
            )}
          </div>
        </div>
        <hr className="w-full my-2 border-t-2 border-gray-300" />
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-xl underline mb-3">検索条件欄</h3>
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold">アップロード日</p>
            <Select
              placeholder="アップロード日を選択"
              colorScheme="blue"
              bg="white"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            >
              <option value={startOfYearRFC3339}>今年</option>
              <option value={startOfMonthRFC3339}>今月</option>
              <option value={startOfTodayRFC3339}>今日</option>
              <option value="1970-01-01T00:00:00Z">全期間</option>
            </Select>
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-semibold">並び順</p>
            <Select
              placeholder="並び順を選択"
              colorScheme="blue"
              bg="white"
              value={selectedOrder}
              onChange={(e) => setSelectedOrder(e.target.value)}
            >
              <option value="viewCount">再生回数</option>
              <option value="rating">評価</option>
            </Select>
            <button
              className={
                searchClick === false
                  ? "bg-blue-500 text-white font-semibold rounded-lg p-2 mt-2"
                  : "text-white bg-gray-500 font-semibold rounded-lg p-2 mt-2"
              }
              disabled={searchClick}
              onClick={handleSearch}
            >
              検索実行
            </button>
            {searchClick ? (
              <p className="text-red-500">※ 検索は1日に1度だけ可能です</p>
            ) : (
              <p className="text-gray-500">※ 検索は1日に1度だけ可能です</p>
            )}
          </div>
        </div>
        <hr className="w-full my-2 border-t-2 border-gray-300" />

        {loading ? (
          <div className="h-96">
            <Loading />
          </div>
        ) : (
          //検索結果の表示部分
          <div className="flex flex-col items-center justify-center">
            <h5 className="font-bold text-xl underline mb-3">検索結果</h5>
            <div className="flex flex-col items-center justify-center pb-20">
              {videos.length === 0 ? (
                <p>検索結果がありません。</p>
              ) : (
                videos.map((video) => (
                  <VideosCard key={video.id} video={video} />
                ))
              )}
            </div>
          </div>
        )}
      </div>
      <ErrorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="※キーワード生成とタブ選択を完了してください"
      />
    </div>
  );
};

export default Mainpage;
