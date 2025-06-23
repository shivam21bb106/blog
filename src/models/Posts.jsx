import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    tags: {
      type: String,
      required: true,
    },
    likes:{
      type:Number,
      default:0,
    },
    likedBy:{
      type:[String],
      default:[]
    }
  },
  { timestamps: true } 
);

const Posts = mongoose.models.Posts || mongoose.model("Posts", postSchema);
export default Posts;
