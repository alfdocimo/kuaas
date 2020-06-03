import React from "react";

import {
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  FacebookShareButton,
  EmailShareButton,
  TwitterIcon,
  LinkedinIcon,
  WhatsappIcon,
  FacebookIcon,
  EmailIcon,
} from "react-share";

export default function ShareSocial({ title, url }) {
  return (
    <div className="mt-4">
      <TwitterShareButton url={url} title={title} className="mr-4">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <LinkedinShareButton url={url} title={title} className="mr-4">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <WhatsappShareButton url={url} title={title} className="mr-4">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      <EmailShareButton url={url} title={title} className="mr-4">
        <EmailIcon size={32} round />
      </EmailShareButton>
      <FacebookShareButton url={url} title={title} className="mr-4">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}
