import { useEffect } from "react";
import { TwitterIcon } from "../icons/twitterIcon";
import { YoutubeIcon } from "../icons/youtubeIcon";
import { ShareIcon } from "../icons/shareIcon";
import { DeleteIcon } from "../icons/deleteIcon";

declare global {
  interface Window {
    twttr?: {
      widgets?: {
        load: () => void;
      };
    };
  }
}

interface cardProps {
  type: "twitter" | "youtube";
  title: string;
  link: string;
}

const types = {
  twitter: <TwitterIcon />,
  youtube: <YoutubeIcon />,
};

const getYoutubeEmbedUrl = (link: string) => {
  const match = link.match(
    /(?:youtu\.be\/|youtube\.com\/watch\?v=|youtube\.com\/embed\/)([A-Za-z0-9_-]{11})/
  );

  const videoId = match?.[1];

  return videoId ? `https://www.youtube.com/embed/${videoId}` : "";
};

const getTwitterEmbedUrl = (link: string) => {
  try {
    const url = new URL(link);

    if (
      url.hostname === "x.com" ||
      url.hostname === "www.x.com"
    ) {
      url.hostname = "twitter.com";
    }

    return url.toString();
  } catch {
    return link;
  }
};

export function ContentCard({ type, title, link }: cardProps) {
  useEffect(() => {
    if (type !== "twitter") return;

    const scriptId = "twitter-widgets-script";

    const loadWidgets = () => {
      window.twttr?.widgets?.load();
    };

    const existingScript = document.getElementById(
      scriptId
    ) as HTMLScriptElement | null;

    // Twitter script already exists
    if (existingScript) {
      if (window.twttr?.widgets?.load) {
        loadWidgets();
      } else {
        existingScript.addEventListener("load", loadWidgets);
      }

      return () => {
        existingScript.removeEventListener("load", loadWidgets);
      };
    }

    // Load Twitter widgets script
    const script = document.createElement("script");

    script.id = scriptId;
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    script.charset = "utf-8";

    script.addEventListener("load", loadWidgets);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener("load", loadWidgets);
    };
  }, [type, link]);

  const renderEmbed = () => {
    // =========================
    // YOUTUBE
    // =========================
    if (type === "youtube") {
      const youtubeUrl = getYoutubeEmbedUrl(link);

      if (!youtubeUrl) {
        return (
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="mt-4 block"
          >
            Open video
          </a>
        );
      }

      return (
        <iframe
          className="mt-4 aspect-video w-full rounded-lg"
          src={youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      );
    }

    // =========================
    // TWITTER / X
    // =========================
    return (
      <blockquote className="twitter-tweet mt-4">
        <a
          href={getTwitterEmbedUrl(link)}
          target="_blank"
          rel="noreferrer"
        >
          View this tweet
        </a>
      </blockquote>
    );
  };

  return (
    <div className="bg-red-200 w-68 p-4 rounded-xl">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          {types[type]}

          <span className="font-semibold">
            {title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            <ShareIcon />
          </a>

          <div>
            <DeleteIcon />
          </div>
        </div>
      </div>

      {renderEmbed()}
    </div>
  );
}