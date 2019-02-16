export interface IDrumItem {
    key: number;
    isPlaying: boolean;
    title: string;
    text: string;
    audio: string;
}

export const drumItems: IDrumItem[] = [
    {
        key: 97,
        audio: 'clap.wav',
        isPlaying: false,
        text: 'clap',
        title: 'A'
    },
    {
        key: 115,
        audio: 'hihat.wav',
        isPlaying: false,
        text: 'hihat',
        title: 'S'
    },
    {
        key: 100,
        audio: 'kick.wav',
        isPlaying: false,
        text: 'kick',
        title: 'D'
    },
    {
        key: 102,
        audio: 'openhat.wav',
        isPlaying: false,
        text: 'openhat',
        title: 'F'
    },
    {
        key: 103,
        audio: 'boom.wav',
        isPlaying: false,
        text: 'boom',
        title: 'G'
    },
    {
        key: 104,
        audio: 'ride.wav',
        isPlaying: false,
        text: 'ride',
        title: 'H'
    },
    {
        key: 106,
        audio: 'snare.wav',
        isPlaying: false,
        text: 'snare',
        title: 'J'
    },
    {
        key: 107,
        audio: 'tom.wav',
        isPlaying: false,
        text: 'tom',
        title: 'K'
    },
    {
        key: 108,
        audio: 'tink.wav',
        isPlaying: false,
        text: 'tink',
        title: 'L'
    },

];