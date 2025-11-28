import React from 'react';

export interface Reference {
  id: string;
  text: string;
  url?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  readTime: string;
  publishDate: string;
  content: React.ReactNode; // Using ReactNode to allow rich text/components in content for this demo
  references: Reference[];
  heroImage: string;
}

export enum PageRoute {
  HOME = 'HOME',
  POST = 'POST',
}

export interface NavigationState {
  currentPage: PageRoute;
  currentPostId?: string;
}