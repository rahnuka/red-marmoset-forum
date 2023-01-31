import './Forum.css'
function Forum() {
  // const Post = ({ post: { title, body,
    // imgUrl, author }, index }) => {
      //test html to see how to arrange forum by feed page
    return (
      <div className="forum">
         <body> 
                <h1> <header>Welcome Back <a href='/settings'>User!</a></header> 
                    <div className='tab'>
                      <div className='discussionstab'>
                        <p>discussion title</p>
                        <p2>discussion content</p2>
                        </div>
                      <div className='lastposttab'>
                        <p>post title</p>
                        <p2>post author</p2>
                        <p3>post datetime</p3>
                        </div>
                      <div className='discussioninfotab'>
                        <p>posts</p>
                        <p2>34</p2>
                      </div>
                      </div>
                    <div className='tab'>
                      <div className='discussionstab'>
                        <p>discussion title</p>
                        <p2>discussion content</p2>
                        </div>
                      <div className='lastposttab'>
                        <p>post title</p>
                        <p2>post author</p2>
                        <p3>post datetime</p3>
                        </div>
                      <div className='discussioninfotab'>
                        <p>posts</p>
                        <p2>45</p2>
                        </div>
                        </div>
                    <div className='tab'>
                      <div className='discussionstab'>
                        <p>discussion title</p>
                        <p2>discussion content</p2>
                        </div>
                      <div className='lastposttab'>
                        <p>post title</p>
                        <p2>post author</p2>
                        <p3>post datetime</p3>
                        </div>
                      <div className='discussioninfotab'>
                        <p>posts</p>
                        <p2>54</p2>
                      </div>
                      </div>
                    <div className='tab'>
                      <div className='discussionstab'>
                        <p>discussion title</p>
                        <p2>discussion content</p2>
                        </div>
                      <div className='lastposttab'>
                        <p>post title</p>
                        <p2>post author</p2>
                        <p3>post datetime</p3>
                        </div>
                      <div className='discussioninfotab'>
                        <p>posts</p>
                        <p2>54</p2>
                      </div>
                      </div>
                </h1>
          </body>
      </div>
    );
  }

  //create a footer which naviagtes pages and so i caan get rid of that corner thing


  //for the link thats name is 'User' in the header, i was going to create a seperate page for the users accoubnt settings

  //Feed page will be default for forum, the search function 
  //will be at the top right and view by discussion thread will be when 
  //one views a post and it expands and can view by the comments
  
  export default Forum;