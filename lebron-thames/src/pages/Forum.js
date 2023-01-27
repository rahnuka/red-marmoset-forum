import './Forum.css'
function Forum() {
  // const Post = ({ post: { title, body,
    // imgUrl, author }, index }) => {
    return (
      <div className="forum">
         <body> 
                <h1> <header>Welcome Back <a href='/settings'>User!</a></header> 
                    <div><p>comments</p></div>
                    <div>discussion<p>comments</p></div>
                    <div>discussion<p>comments</p></div>
                    <div>discussion<p>comments</p></div>
                </h1>
          </body>
      </div>
    );
  }

  discusionstuff= [{
    discussiontitle: "title",
    discussioncontent: "content",
    lastposttitle: "lastposttitle", 
    author: "last post author",
    lastposttime: "wee hours of the morning",
    postsfordiscussion: "too many"
    },
    {
    discussiontitle: "title",
    discussioncontent: "content",
    lastposttitle: "lastposttitle", 
    author: "last post author",
    lastposttime: "wee hours of the morning",
    postsfordiscussion: "too many"
  },
    {
    discussiontitle: "title",
    discussioncontent: "content",
    lastposttitle: "lastposttitle", 
    author: "last post author",
    lastposttime: "wee hours of the morning",
    postsfordiscussion: "too many"
    },
    {
    discussiontitle: "title",
    discussioncontent: "content",
    lastposttitle: "lastposttitle", 
    author: "last post author",
    lastposttime: "wee hours of the morning",
    postsfordiscussion: "too many"
    }
]

  //for the link thats name is 'User' in the header, i was going to create a seperate page for the users accoubnt settings

  //Feed page will be default for forum, the search function 
  //will be at the top right and view by discussion thread will be when 
  //one views a post and it expands and can view by the comments
  
  export default Forum;