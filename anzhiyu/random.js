var posts=["posts/49bb27f6.html","posts/c8a95ac9.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };