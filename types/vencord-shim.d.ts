declare module "@utils/types" {
    export enum OptionType {
        STRING,
        NUMBER,
        BIGINT,
        BOOLEAN,
        SELECT,
        SLIDER,
        COMPONENT,
        CUSTOM
    }

    export interface PluginAuthor {
        name: string;
        id: bigint;
    }

    export interface PluginDef {
        name: string;
        description: string;
        authors: PluginAuthor[];
        settings?: unknown;
        start?(): void | Promise<void>;
        stop?(): void | Promise<void>;
        [key: string]: unknown;
    }

    export default function definePlugin<T extends PluginDef>(def: T): T;
}

declare module "@api/Settings" {
    export interface SettingOption {
        type: unknown;
        description: string;
        default?: unknown;
    }

    export function definePluginSettings<D extends Record<string, SettingOption>>(
        def: D
    ): {
        def: D;
        store: any;
    };
}

declare module "@api/MessageEvents" {
    export interface MessageObject {
        content: string;
    }

    export type MessageSendListener = (
        channelId: string,
        messageObj: MessageObject,
        options: unknown,
        props: unknown
    ) => void | { cancel: boolean; } | Promise<void | { cancel: boolean; }>;

    export function addMessagePreSendListener(listener: MessageSendListener): MessageSendListener;
    export function removeMessagePreSendListener(listener: MessageSendListener): boolean;
}
