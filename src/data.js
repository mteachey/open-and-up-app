export default {
    users:[{
        "user_id":1,
        "username":"melinda",   
        "followee_ids":[2,3],
        "bookmark_ids":[1,2,10],
        "date_created":"June 7th 2020",
    },{
      "user_id":2,
      "username":"teachey",  
      "followee_ids":[1,3],   
      "bookmark_ids":[5,4,7],
      "date_created":"June 8th 2020",    
      },{
        "user_id":3,
        "username":"mteachey", 
        "followee_ids":[2,1], 
        "bookmark_ids":[8,9],   
        "date_created":"June 9th 2020",      
      }],
      bookmarks:[{
         "bookmark_id":1,
         "user_id":1,
         "post_id":1,
         "content":'I really loved this post.....'
      },
      {
         "bookmark_id":2,
         "user_id":1,
         "post_id":2,
         "content":'I really loved this post.....'
      },
      {
         "bookmark_id":3,
         "user_id":1,
         "post_id":10,
         "content":'I really loved this post.....'
      },
      {
         "bookmark_id":4,
         "user_id":2,
         "post_id":5,
         "content":'I really loved this post.....'
      },
      {
         "bookmark_id":5,
         "user_id":2,
         "post_id":4,
         "content":'I really loved this post.....'
      },
      {
         "bookmark_id":6,
         "user_id":2,
         "post_id":7,
         "content":'I really loved this post.....'
      },
      {
         "bookmark_id":7,
         "user_id":3,
         "post_id":8,
         "content":'I really loved this post.....'
      },
      {
         "bookmark_id":8,
         "user_id":3,
         "post_id":9,
         "content":'I really loved this post.....'
      },
      ],
      posts:[ {
        "post_id":1,
        "user_id":1,
        "username":"melinda",
        "content":"My inner growth propelled me to by my own 'I'-to be an authentic woman who was contained in herself, who chose and determined and handled her life from her own genuine spiritual center  -Sue Monk Kidd",
        "type":"reflection",
        "date_created":"June 7th 2020"           
     },
     {
      "post_id":6,
      "user_id":2,
      "username":"teachey",
      "title":"Untamed",
      "author":"Glennon Doyle",
      "description":"Soulful and uproarious, forceful and tender, Untamed is both an intimate memoir and a galvanizing wake-up call. It is the story of how one woman learned that a responsible mother is not one who slowly dies for her children, but one who shows them how to fully live.",
      "type":"book",
      "date_created":"June 9th 2020"            
   },
     {
      "post_id":9,
      "user_id":3,
      "username":"mteachey", 
      "content":"In order to love who you are, you cannot hate the experiences that shaped you",
      "type":"reflection",
      "date_created":"June 11th 2020"           
   },
     {
      "post_id":7,
      "user_id":1,
      "username":"melinda",
      "content":"'If you are walking a path of low expectations, the next thing you find will support those low expectations.'  -Deepak Chopra",
      "type":"reflection",
      "date_created":"June 7th 2020"           
   },{
        "post_id":8,
        "user_id":1,
        "username":"melinda",
        "title":"Three Little Birds",
        "artist":"Bob Marley",
        "type":"music",
        "link":"https://youtu.be/zaGUr6wzyT8",
        "date_created":"June 8th 2020"            
     },
     {
      "post_id":2,
      "user_id":1,
      "username":"melinda",
      "title":"Reinventing the Body, Resurrecting the Soul",
      "author":"Deepak Chopra",
      "description":"Transformation can't stop with the body, however; it must involve the soul. The soul–seemingly invisible, aloof, and apart from the material world–actually creates the body. Only by going to the level of the soul will you access your full potential, bringing more intelligence, creativity, and awareness into every aspect of your life.",
      "type":"book",
      "date_created":"June 8th 2020"            
   },
   {
      "post_id":10,
      "user_id":3,
      "username":"mteachey", 
      "content":"Remember to take some time alone with yourself and tune into what feels true beyond the voice of ego and external forces-@RisingWoman IG",
      "type":"reflection",
      "date_created":"June 11th 2020"           
   },
   {
        "post_id":3,
        "user_id":3,
        "username":"mteachey", 
        "title":"Super Soul Conversations: Dream Big with Joel Osteen",
        "description":"Pastor Joel Osteen discusses how to dream big and pray bold. Pastor Osteen explains why it’s important to focus on how far you’ve come and not on how much further you need to go to achieve your dream. He also shares why he believes gratitude plays a key role in dreaming big.",
        "type":"podcast",
        "link":"https://podcasts.apple.com/us/podcast/joel-osteen-dream-big/id1264843400?i=1000472985491",
        "date_created":"June 9th 2020"            
     },
     {
        "post_id":4,
        "user_id":2,
        "username":"teachey",
        "title":"Some Uplifting Event",
        "description":"Get inspired. Get uplifted. Connect",
        "type":"event",
        "link":"https://www.google.com/",
        "date_created":"June 7th 2020"            
     },
     {
        "post_id":5,
        "user_id":2,
        "username":"teachey",
        "title":"A New Earth",
        "author":"Eckhart Tolle",
        "description":"A wake-up call for the entire planet . . . [A New Earth] helps us to stop creating our own suffering and obsessing over the past and what the future might be, and to put ourselves in the now.",
        "type":"book",
        "date_created":"June 8th 2020"            
     },
    ],
}