var posts=["posts/49bb27f6.html","posts/c8a95ac9.html","posts/710db6ea.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };