declare module "janus-gateway-client" {
  interface ChatRoomHandlerData {
    room: string;
  }
  interface ChatRoomHandlerSendArgs {
    message: {
      request: string;
    };
    jsep?: string;
    success?: (data: ChatRoomHandlerData) => void;
    error?: (msg: string) => void;
  }

  interface ChatRoomHandlerDataArgs {
    text: string;
    success?: (data: ChatRoomHandlerData) => void;
    error?: (msg: string) => void;
    
  }

  interface ChatRoomHandlerCreateAnswerArgs {
    jsep: string;
    media: { audio: boolean; video: boolean; data: boolean };
    success: (jsep: string) => void;
    error: (msg: string) => void;
    
  }

  export class ChatRoomHandler {
    getPlugin(): void;
    getId(): string;
    send(args: ChatRoomHandlerSendArgs): void;
    createAnswer(args: ChatRoomHandlerCreateAnswerArgs): void;
    data(args: ChatRoomHandlerDataArgs): void;
    detach(): void;
  }

  interface AttachArgs {
    plugin: string;
    opaqueId: string;
    success: (pluginHandle: any) => void;
    error: (...err: string[]) => void;
    webrtcState: (on: any) => void;
    onmessage: (msg: any, jsep: any) => void;
    ondataopen: (data: any) => void;
    ondata: (data: any) => void;
    oncleanup: () => void;
  }

  export default class Janus {
    constructor(opts: any);
    attach(opts: AttachArgs): void;

    error(err: any): void;
    static error(...err: string[]): void;
    static init(opts: any): void;
    static isWebrtcSupported(): boolean;
    static log(msg: string): void;
    static debug(msg: string): void;
  }
}