/*
 * Copyright (c) 2026 MetaclassMethod
 */

import { addMessagePreSendListener, removeMessagePreSendListener } from "@api/MessageEvents";
import { definePluginSettings } from "@api/Settings";
import definePlugin, { OptionType } from "@utils/types";

const DEFAULT_DOMAIN = "fxtwitter.com";

const settings = definePluginSettings({
    domain: {
        type: OptionType.STRING,
        description: "Domain to rewrite x.com and twitter.com links to",
        default: DEFAULT_DOMAIN
    }
});

const TWITTER_LINK = /(?<=https?:\/\/)(?:www\.|mobile\.)?(?:twitter|x)\.com(?![\w.-])/gi;

function targetDomain() {
    const domain = (settings.store.domain ?? "").trim().replace(/^https?:\/\//i, "").replace(/\/+$/, "");
    return domain || DEFAULT_DOMAIN;
}

const onPreSend = (_channelId: string, messageObj: { content: string; }) => {
    messageObj.content = messageObj.content.replace(TWITTER_LINK, targetDomain());
};

export default definePlugin({
    name: "AutoTwit",
    description: "Rewrites x.com and twitter.com links to fxtwitter (or a custom domain) when you send them.",
    authors: [{ name: "MetaclassMethod", id: 760441533022732318n }],
    tags: ["Chat"],
    settings,

    start() {
        addMessagePreSendListener(onPreSend);
    },

    stop() {
        removeMessagePreSendListener(onPreSend);
    }
});
