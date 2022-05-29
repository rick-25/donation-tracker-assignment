import { legacy_createStore as createStore } from 'redux';



const tempData = {
    activeId: "",
    creators: [{
        id: "232323",
        userName: "Carry Minati",
        profileUrl: "https://yt3.ggpht.com/ytc/AKedOLTYmj1X3VgQCftFxIIxGH5leO14nBVJCctR2r6m1Q=s176-c-k-c0x00ffffff-no-rj-mo",
        profession: "YouTuber"
    }, {
        id: "21321",
        userName: "Darth Vadar",
        profileUrl: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/15/50/1449498579-darth-vader-star-wars.jpg?resize=768:*",
        profession: "Dark lord"
    }, {
        id: "132323",
        userName: "BB ki vines",
        profileUrl: "https://i.ytimg.com/vi/Io1Y7Fzohk8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCms7Z1CLiH_xzg3Hl5I73l7Ul5Ww",
        profession: "Youtuber"
    }, {
        id: "301",
        userName: "John Cena",
        profileUrl: "https://static-koimoi.akamaized.net/wp-content/new-galleries/2022/01/john-cena-on-him-being-a-part-of-wrestlemania-38-001.jpg",
        profession: "Magician"
    }]
};

const reducer = (state = tempData, action) => {
    return state;
}

const store = createStore(reducer);

export default store;