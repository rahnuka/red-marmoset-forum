import './Forum.css'
function Forum() {
    return (
      <div className="forum">
         <body> 
                <h1> <header>Welcome Back <a href='/settings'>User!</a></header>
                    <div>discussion<p>comments</p></div>
                    <div>discussion<p>comments</p></div>
                    <div>discussion<p>comments</p></div>
                    <div>discussion<p>comments</p></div>
                </h1>
          </body>
      </div>
    );
  }

  //Feed page will be default for forum, the search function 
  //will be at the top right and view by discussion thread will be when 
  //one views a post and it expands and can view by the comments
  
  export default Forum;