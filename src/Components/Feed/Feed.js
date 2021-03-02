import {React ,useEffect , useState} from 'react'
import "./Feed.css";
import CreateIcon from "@material-ui/icons/Create";
import InputOption from "./InputOption.js"
import ImageIcon from '@material-ui/icons/Image';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from '../Post/Post.js';
// import firebase from 'firebase';
// import {db} from '../../firebase.js';
function Feed() {
// const [posts , setPosts] = React.useState([]);
const [input , setInput] = useState('');

// useEffect(() => {
//     db.collection("posts").orderBy('timestamp','desc').onSnapshot(snapshot => (
//         setPosts(
//             snapshot.docs.map((doc) => ({
//             id: doc.id,
//             data: doc.data(),
//         })))
//     )
//     )
// },[])

const sendPost = (e) => {
    e.preventDefault();

    // db.collection('posts').add({
    //     name: 'Onkar Solat',
    //     description: 'this is a test ',
    //     message : 'abc',
    //     photoUrl:"",
    //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    // });

    setInput("");
};

    return <div className="feed">
        <div className="feed__inputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                    <button onClick={sendPost} type="submit">
                         Send
                    </button>
                </form>
            </div>
            <div className="feed__inputOptions">
                <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
                <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E"/>
                <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD"/>
                <InputOption Icon={CalendarViewDayIcon} title="Write Article" color="#7FC15E"/>
            </div>
        </div>
        {/* post */}
        {/* {posts.map(({ id, data: {name , description , message , photoUrl}}) =>(
            <Post 
            key ={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}

            />
        ))} */}

        {/* ***********************************Fake data***************************************** */}

        <Post name="Onkar Solat" 
        description="This is a test"
        message="Descriptive message"
        />

        <Post name="Unsorted Array"
        description="Mentor|Instructor|Buddy"
        message="How are you all doin?Check this out..."
        photoUrl="https://www.w3schools.com/css/paris.jpg"
        />

<Post name="Hritik Roshan"
        description="Actor|Dancer|Producer"
        message="This facinates me"
        photoUrl="https://media-exp1.licdn.com/dms/image/C4D22AQFYw2CTvmK7Cg/feedshare-shrink_800/0/1614160222468?e=1617235200&v=beta&t=6lHkr46vv44QhQlx_Ez8Vap1E2qFvfHUuIMnP6n9QUI"
        />

        {/* ***********************************Fake data***************************************** */}
    </div>
}

export default Feed


