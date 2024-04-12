import React from "react";
export default function Admin() {
  return (
    <div class="container">
      <div class="box2">
        <p>
          <h2>Admin Home Page</h2>
        </p>
        <br></br>
        <form class="admin" action="newsong">
          <a href="newsong">
            <button>
              <b>ADD NEW SONGS</b>
            </button>
          </a>
        </form>
        <br></br>
        <form class="admin" action="viewsong">
          <button>
            <b>VIEW SONGS</b>
          </button>
        </form>
        <br></br>
        <form class="admin" action="createplaylists">
          <button>
            <b>CREATE PLAYLIST</b>
          </button>
        </form>
        <br></br>
        <form class="admin" action="viewplaylists">
          <button>
            <b>VIEW PLAYLIST</b>
          </button>
        </form>
      </div>
    </div>
  );
}
