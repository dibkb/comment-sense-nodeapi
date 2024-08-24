export function convertToVideoInfo(video) {
  return {
    category: "Uncategorized", // Assuming category is not provided in the raw data
    channel: {
      icons: video.channel.thumbnails.map((thumbnail) => ({
        height: thumbnail.height,
        url: thumbnail.url,
        width: thumbnail.width,
      })),
      id: video.channel.id,
      name: video.channel.name,
      subscribers: {
        pretty: video.channel.subscriberCount,
      },
      url: `https://www.youtube.com/channel/${video.channel.id}`,
    },
    description: video.description,
    duration: {
      lengthSec: video.duration.toString(),
    },
    embed: {
      flashSecureUrl: "", // Assuming flashSecureUrl is not provided
      flashUrl: "", // Assuming flashUrl is not provided
      height: 1080, // Assuming the height of the embed
      iframeUrl: `https://www.youtube.com/embed/${video.id}`,
      width: 1920, // Assuming the width of the embed
    },
    id: video.id,
    isFamilySafe: true, // Assuming the video is family safe
    isLive: video.isLiveContent,
    isUnlisted: false, // Assuming the video is not unlisted
    keywords: video.tags,
    published: {
      pretty: video.uploadDate,
      text: new Date(video.uploadDate).toISOString(), // Convert date to ISO format
    },
    ratings: {
      dislikes: {
        pretty: "N/A", // Assuming dislikes are not provided
        text: "N/A", // Assuming dislikes are not provided
      },
      likes: {
        pretty: video.likeCount.toString(),
        text: video.likeCount.toString(),
      },
    },
    shortDescription: video.description.split("\n")[0], // Using the first line of the description as a short description
    thumbnails: video.thumbnails.map((thumbnail) => ({
      height: thumbnail.height,
      url: thumbnail.url,
      width: thumbnail.width,
    })),
    title: video.title,
    uploaded: {
      text: video.uploadDate,
    },
    url: `https://www.youtube.com/watch?v=${video.id}`,
    views: {
      pretty: video.viewCount.toString(),
      text: video.viewCount.toString() + " views",
    },
  };
}
