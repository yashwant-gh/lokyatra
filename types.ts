import React from 'react';

export interface Destination {
  id: number;
  name: string;
  image: string;
  price: string;
  duration: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}