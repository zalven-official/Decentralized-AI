import { createRouter, createWebHistory } from 'vue-router';
import type { Route } from '@/types';

import {
  HomeIcon,
  ChatBubbleBottomCenterIcon,
  UserGroupIcon,
  UserIcon,
  ChartBarIcon,
  AdjustmentsVerticalIcon,
  SpeakerWaveIcon,
  DocumentTextIcon,
  PhotoIcon,
  MagnifyingGlassCircleIcon,
  EyeIcon,
  PhoneIcon,
  PencilIcon
} from '@heroicons/vue/24/solid';

export const routes: Route[] = [
  {
    icon: ChatBubbleBottomCenterIcon,
    name: 'Chat bot',
    path: '/chat-bot',
    component: () => import('@/pages/Chatbot.vue'),
    description: 'Explore the capabilities of our interactive chat bot.'
  },
  {
    icon: UserGroupIcon,
    name: 'Face Detection',
    path: '/face-detection',
    component: () => import('@/pages/FaceDetection.vue'),
    description: 'Detect faces in images using advanced facial recognition algorithms.'
  },
  {
    icon: UserIcon,
    name: 'Facial Recognition',
    path: '/facial-recognition',
    component: () => import('@/pages/FacialRecognition.vue'),
    description: 'Recognize and identify individuals based on facial features.'
  },
  {
    icon: ChartBarIcon,
    name: 'Forecasting',
    path: '/forecasting',
    component: () => import('@/pages/Forecasting.vue'),
    description: 'Use data to predict future trends and make informed decisions.'
  },
  {
    icon: MagnifyingGlassCircleIcon,
    name: 'Image To Text',
    path: '/image-to-text',
    component: () => import('@/pages/ImageToText.vue'),
    description: 'Convert images to textual information for easy analysis.'
  },
  {
    icon: MagnifyingGlassCircleIcon,
    name: 'Predictive Text',
    path: '/predictive-text',
    component: () => import('@/pages/PredictiveText.vue'),
    description: 'It predicts the next word or words in a sentence based on the context of the preceding words'
  },
  {
    icon: EyeIcon,
    name: 'Object Detection',
    path: '/object-detection',
    component: () => import('@/pages/ObjectDetection.vue'),
    description: 'Identify and locate objects within images or videos.'
  },
  {
    icon: AdjustmentsVerticalIcon,
    name: 'Speech Recognition',
    path: '/speech-recognition',
    component: () => import('@/pages/SpeechRecognition.vue'),
    description: 'Transcribe spoken words into text with advanced speech recognition.'
  },
  {
    icon: SpeakerWaveIcon,
    name: 'Speech to Speech',
    path: '/speech-to-speech',
    component: () => import('@/pages/SpeechToSpeech.vue'),
    description: 'Convert spoken words in one language to another in real-time.'
  },
  {
    icon: DocumentTextIcon,
    name: 'Speech to Text',
    path: '/speech-to-text',
    component: () => import('@/pages/SpeechToText.vue'),
    description: 'Transcribe spoken words into written text.'
  },
  {
    icon: PhotoIcon,
    name: 'Text to Image',
    path: '/text-to-image',
    component: () => import('@/pages/TextToImage.vue'),
    description: 'Generate images from textual descriptions.'
  },
  {
    icon: PhoneIcon,
    name: 'Text to Speech',
    path: '/text-to-speech',
    component: () => import('@/pages/TextToSpeech.vue'),
    description: 'Convert written text into spoken words.'
  },
  {
    icon: PencilIcon,
    name: 'Text to Text',
    path: '/text-to-text',
    component: () => import('@/pages/TextToText.vue'),
    description: 'Perform various operations on textual data.'
  }
];

const publicRoutes = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue')
  },
  {
    icon: HomeIcon,
    name: 'Home',
    path: '/',
    component: () => import('@/pages/Home.vue')
  }
];
const router = createRouter({
  history: createWebHistory(process.env.VUE_BASE_PATH ?? ''),
  routes: [...routes, ...publicRoutes]
});

export default router;
