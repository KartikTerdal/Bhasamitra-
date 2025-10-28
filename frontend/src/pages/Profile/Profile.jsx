import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import './Profile.css';

const peopleItems = [
    {
        id: 1,
        name: "Emma Johnson",
        username: "@EmmaJ",
        followers: "1.2M",
        following: "200",
        category: "Fashion",
        description: "A top fashion designer known for her unique runway designs.",
        image: "/i1.jpg",
        coverImage: "/c1.jpg",
        socialStats: { youtube: "1.2M", instagram: "800K", tiktok: "600K", twitter: "500K" },
        videos: [
            { platform: "YouTube", user: "@EmmaJ", src: "/f1.mp4" },
            { platform: "Instagram", user: "@EmmaJ_insta", src: "/ej2.mp4" },
            { platform: "TikTok", user: "@EmmaJ_tiktok", src: "/ej3.mp4" }
        ]
    },
    {
        id: 2,
        name: "Michael Smith",
        username: "@MikeTech",
        followers: "900K",
        following: "180",
        category: "Technology",
        description: "An AI researcher leading innovations in machine learning.",
        image: "/i2.jpg",
        coverImage: "/c2.jpg",
        socialStats: { youtube: "900K", instagram: "700K", tiktok: "500K", twitter: "400K" },
        videos: [
            { platform: "YouTube", user: "@MikeTech", src: "/msv1.mp4" },
            { platform: "Instagram", user: "@MikeTech_insta", src: "/ms2.mp4" },
            { platform: "Twitch", user: "@MikeTech_live", src: "/ms3.mp4" }
        ]
    },
    {
        id: 3,
        name: "Sophia Davis",
        username: "@SophiaD",
        followers: "1M",
        following: "250",
        category: "Fashion",
        description: "A model and influencer redefining modern streetwear trends.",
        image: "/i3.jpg",
        coverImage: "/c3.jpg",
        socialStats: { youtube: "1M", instagram: "850K", tiktok: "700K", twitter: "450K" },
        videos: [
            { platform: "YouTube", user: "@SophiaD", src: "/sd1.mp4" },
            { platform: "Instagram", user: "@SophiaD_insta", src: "/sd2.mp4" },
            { platform: "TikTok", user: "@SophiaD_tiktok", src: "/sd3.mp4" }
        ]
    },
    {
        id: 4,
        name: "David Lee",
        username: "@DavidL",
        followers: "750K",
        following: "300",
        category: "Business",
        description: "An entrepreneur behind multiple successful startups.",
        image: "/i4.jpg",
        coverImage: "/c4.jpg",
        socialStats: { youtube: "750K", instagram: "600K", tiktok: "400K", twitter: "350K" },
        videos: [
            { platform: "YouTube", user: "@DavidL", src: "/dl1.mp4" },
            { platform: "Instagram", user: "@DavidL_insta", src: "/dl2.mp4" },
            { platform: "TikTok", user: "@DavidL_tiktok", src: "/dl3.mp4" }
        ]
    },
    {
        id: 5,
        name: "Olivia Brown",
        username: "@OliviaB",
        followers: "1.5M",
        following: "280",
        category: "Fashion",
        description: "A stylist with an eye for elegant and minimalist fashion.",
        image: "/i5.jpg",
        coverImage: "/c5.jpg",
        socialStats: { youtube: "1.5M", instagram: "1.2M", tiktok: "900K", twitter: "600K" },
        videos: [
            { platform: "YouTube", user: "@OliviaB", src: "/ob1.mp4" },
            { platform: "Instagram", user: "@OliviaB_insta", src: "/ob2.mp4" },
            { platform: "TikTok", user: "@OliviaB_tiktok", src: "/ob3.mp4" }
        ]
    },
    {
        id: 6,
        name: "James Wilson",
        username: "@JamesW",
        followers: "800K",
        following: "220",
        category: "Technology",
        description: "A software engineer known for open-source contributions.",
        image: "/i6.jpg",
        coverImage: "/c6.jpg",
        socialStats: { youtube: "800K", instagram: "750K", tiktok: "500K", twitter: "400K" },
        videos: [
            { platform: "YouTube", user: "@JamesW", src: "/jw1.mp4" },
            { platform: "Instagram", user: "@JamesW_insta", src: "/jw2.mp4" },
            { platform: "Twitch", user: "@JamesW_live", src: "/jw3.mp4" }
        ]
    }
];


const Profile = () => {
    const { id } = useParams();
    const location = useLocation();
    const person = location.state || peopleItems.find(item => item.id.toString() === id);

    if (!person) return <p>Profile not found</p>;

    return (
        <div className="profile-container">
            <div className="cover-image">
                <img src={person.coverImage} alt="Cover" />
            </div>
            <div className="profile-info">
                <img className="profile-pic" src={person.image} alt={person.name} />
                <h2>{person.name} <span className="verified-badge">✔</span></h2>
                <p className="username">{person.username}</p>
                <p className="followers">{person.followers} followers • {person.following} following</p>
                <p className="description">{person.description}</p>
            </div>
            <div className="social-media-stats">
                {Object.entries(person.socialStats).map(([platform, count]) => (
                    <div key={platform} className="social-stat">
                        <p className="stat-count">{count}</p>
                        <p className="stat-platform">{platform} Followers</p>
                    </div>
                ))}
            </div>
            <div className="video-section">
                {person.videos.map((video, index) => (
                    <div key={index} className="video-card">
                        <video className="media" autoPlay loop muted>
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <p className="video-platform">{video.platform}</p>
                        <p className="video-user">{video.user}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Profile;
