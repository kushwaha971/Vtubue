import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";

const commentsData = [
  {
    name: "Akash Kushwaha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Jhon Deo",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [
      {
        name: "Rolando",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Messi",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [],
      },
      {
        name: "Stark",
        text: "Lorem ipsum dolor sit amet, consectetur adip",
        replies: [
          {
            name: "MS",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [
                {
                    name: "Kriti",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
                  {
                    name: "Naruto",
                    text: "Lorem ipsum dolor sit amet, consectetur adip",
                    replies: [],
                  },
            ],
          },
          {
            name: "Kush",
            text: "Lorem ipsum dolor sit amet, consectetur adip",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Suraj Kushwaha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Akash Kushwaha",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Krissh",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
  {
    name: "Suraj",
    text: "Lorem ipsum dolor sit amet, consectetur adip",
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
