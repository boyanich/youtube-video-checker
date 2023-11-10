# Это слегка подправленная версия оригинального YTV, которая возвращает только статус видео: "Успех" или "ERROR"
Методом научного тыка был определен оптимальный delay между запросами, в случае передачи массива: 3с, иначе результаты могут быть не точными
# ytv
node.js module to Manage Youtube Video Information  

    npm install ytv

<br>

# example
```javascript
// example/index.js

let ytv = require("ytv");

// any youtube video link
ytv.get_info("https://www.youtube.com/watch?v=HWR8Aw5htvE&t=59s&pp=ygUJ6rCQ7Iqk7Yq4")
.then(info => console.log(info));
```

<br>

# result
```javascript
info {
  title, 
  view,
  hashtag,
  date
  small_thumbnail,
  big_thumbnail,
  channel_name,
  video_length
}
```

<br>

