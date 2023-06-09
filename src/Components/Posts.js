import React from 'react'
import '../Post.css'


const Posts = (props) => {
    const {userName , mainDialogue, profilePic,superheroImage,superheroMsg,liked,comments} = props ;
    const imagePath = superheroImage; 

    const handleClick = () => {
    //     const button = document.querySelector(".likebutton");
    //     if( button.style.color ==="black")
    //    {
    //     button.style.color = "aqua";
    //    }else{
    //     button.style.color = "black"
    //    }
    };
    return (
     <>
         <div class="card">
        <div class="top">
            <div class="userDetails">
                <div class="profileImg">
                    <img src={profilePic} alt="" class="cover"/>
                </div>
                <h3>{userName}
                    <br/>
                    <span class="movie-title">{ mainDialogue}</span><br/>
                    <span class="upload-time">2h</span>
                    <span class="globeDot">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 15c-0.984 0-1.92-0.203-2.769-0.57l3.643-4.098c0.081-0.092 0.126-0.21 0.126-0.332v-1.5c0-0.276-0.224-0.5-0.5-0.5-1.765 0-3.628-1.835-3.646-1.854-0.094-0.094-0.221-0.146-0.354-0.146h-2c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.189 0.107 0.363 0.276 0.447l1.724 0.862v2.936c-1.813-1.265-3-3.366-3-5.745 0-1.074 0.242-2.091 0.674-3h1.826c0.133 0 0.26-0.053 0.354-0.146l2-2c0.094-0.094 0.146-0.221 0.146-0.354v-1.21c0.634-0.189 1.305-0.29 2-0.29 1.1 0 2.141 0.254 3.067 0.706-0.065 0.055-0.128 0.112-0.188 0.172-0.567 0.567-0.879 1.32-0.879 2.121s0.312 1.555 0.879 2.121c0.569 0.569 1.332 0.879 2.119 0.879 0.049 0 0.099-0.001 0.149-0.004 0.216 0.809 0.605 2.917-0.131 5.818-0.007 0.027-0.011 0.055-0.013 0.082-1.271 1.298-3.042 2.104-5.002 2.104z"></path></svg>
                    </span>
                </h3>
                <br/>         
            </div>
        <div class="dot">
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm0-5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" clip-rule="evenodd"></path></svg>
        </div>
        </div>
        <div class="imgBg">
            <h4 class="message">{superheroMsg}</h4>
            <img src={imagePath} alt="bg" class="cover"></img>
        </div>
        <div class="btns">
            <div class="top-container">
                <div class="left">
                    <svg  class="like" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311h-.3v428h472.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM112 528v364c0 17.7 14.3 32 32 32h65V496h-65c-17.7 0-32 14.3-32 32z"></path></svg>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" version="1" viewBox="0 0 48 48" enable-background="new 0 0 48 48" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="#F44336" d="M34,9c-4.2,0-7.9,2.1-10,5.4C21.9,11.1,18.2,9,14,9C7.4,9,2,14.4,2,21c0,11.9,22,24,22,24s22-12,22-24 C46,14.4,40.6,9,34,9z"></path></svg>
                    <svg class="support" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 640 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path></svg>
                    <h6 class="like">{liked}</h6>
                </div>
                <div class="right">
                    <div>{comments} comments</div>
                </div>
            </div>
            <div 
            class="border-line"></div>
           <div class="bottom-container">
            <ul>
                <li ><svg className='likebutton' stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M885.9 533.7c16.8-22.2 26.1-49.4 26.1-77.7 0-44.9-25.1-87.4-65.5-111.1a67.67 67.67 0 0 0-34.3-9.3H572.4l6-122.9c1.4-29.7-9.1-57.9-29.5-79.4A106.62 106.62 0 0 0 471 99.9c-52 0-98 35-111.8 85.1l-85.9 311H144c-17.7 0-32 14.3-32 32v364c0 17.7 14.3 32 32 32h601.3c9.2 0 18.2-1.8 26.5-5.4 47.6-20.3 78.3-66.8 78.3-118.4 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7 0-12.6-1.8-25-5.4-37 16.8-22.2 26.1-49.4 26.1-77.7-.2-12.6-2-25.1-5.6-37.1zM184 852V568h81v284h-81zm636.4-353l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 16.5-7.2 32.2-19.6 43l-21.9 19 13.9 25.4a56.2 56.2 0 0 1 6.9 27.3c0 22.4-13.2 42.6-33.6 51.8H329V564.8l99.5-360.5a44.1 44.1 0 0 1 42.2-32.3c7.6 0 15.1 2.2 21.1 6.7 9.9 7.4 15.2 18.6 14.6 30.5l-9.6 198.4h314.4C829 418.5 840 436.9 840 456c0 16.5-7.2 32.1-19.6 43z"></path></svg>
                <span>Like</span></li>
                <li><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M144 208c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zm112 0c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32zM256 32C114.6 32 0 125.1 0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5 0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4 0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7 0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"></path></svg><span>Comment</span></li>
                <li><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle fill="none" cx="17.5" cy="18.5" r="1.5"></circle><circle fill="none" cx="5.5" cy="11.5" r="1.5"></circle><circle fill="none" cx="17.5" cy="5.5" r="1.5"></circle><path d="M5.5,15c0.91,0,1.733-0.358,2.357-0.93l6.26,3.577C14.048,17.922,14,18.204,14,18.5c0,1.93,1.57,3.5,3.5,3.5 s3.5-1.57,3.5-3.5S19.43,15,17.5,15c-0.91,0-1.733,0.358-2.357,0.93l-6.26-3.577c0.063-0.247,0.103-0.502,0.108-0.768l6.151-3.515 C15.767,8.642,16.59,9,17.5,9C19.43,9,21,7.43,21,5.5S19.43,2,17.5,2S14,3.57,14,5.5c0,0.296,0.048,0.578,0.117,0.853L8.433,9.602 C7.808,8.64,6.729,8,5.5,8C3.57,8,2,9.57,2,11.5S3.57,15,5.5,15z M17.5,17c0.827,0,1.5,0.673,1.5,1.5S18.327,20,17.5,20 S16,19.327,16,18.5S16.673,17,17.5,17z M17.5,4C18.327,4,19,4.673,19,5.5S18.327,7,17.5,7S16,6.327,16,5.5S16.673,4,17.5,4z M5.5,10C6.327,10,7,10.673,7,11.5S6.327,13,5.5,13S4,12.327,4,11.5S4.673,10,5.5,10z"></path></svg><span>Share</span></li>
                <li><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M13 14h-2a8.999 8.999 0 0 0-7.968 4.81A10.136 10.136 0 0 1 3 18C3 12.477 7.477 8 13 8V2.5L23.5 11 13 19.5V14zm-2-2h4v3.308L20.321 11 15 6.692V10h-2a7.982 7.982 0 0 0-6.057 2.773A10.988 10.988 0 0 1 11 12z"></path></g></svg><span>Sent</span></li>
            </ul>
           </div>


        </div>
    </div>
     </>
  )
}

export default Posts
