const express=require('express');
const mongoose=require('mongoose');

const app=express();

mongoose.connect(
  "mongodb+srv://blog-admin-aman:aman.blog@cluster0.onajj.mongodb.net/myblogDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const blogPostSchema = new mongoose.Schema({
  authorName: String,
  blogTitle: String,
  blogDescription: String,
  blogContent: String,
  blogImage: JSON,
  blogCategory: String,
  blogDate: String,
  sortByDate: Date,
});
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

app.get('/',function (req,res) {
   BlogPost.find({}, function (err, foundPosts) {
    if (err) {
      console.log(err);
    } else {
      let showPosts=foundPosts;
    }
  });
});



app.listen('5000', function() {
    console.log('Backend Running');
});