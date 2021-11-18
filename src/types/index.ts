export interface User {
    email: string;
    token: string;
    username: string;
    bio?: string;
    image?: string;
}

export interface Profile {
    username: string;
    bio: string;
    image: string;
    following: boolean;
}

export interface Article {
    slug: string;
    title: string;
    description: string;
    body: string;
    tagList: string[];
    createdAt: Date;
    updatedAt: Date;
    favorited: boolean;
    favoritesCount: number;
    author: Profile;
}

export interface Comment {
    id: number;
    createdAt: Date;
    updatedAt: Date;
    body: string;
    author: Profile;
}
