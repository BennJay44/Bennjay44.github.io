var posts=["posts/49bb27f6.html","posts/c8a95ac9.html","posts/710db6ea.html","posts/192a7d07.html","posts/a63eeb01.html","posts/bf0489f3.html","posts/31c0f3ab.html","posts/94978a2f.html","posts/8b924896.html","posts/75f97bc3.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };