import type { RouteRecordRaw } from 'vue-router';
import { type Component } from 'vue';

export type Route = RouteRecordRaw & {
  icon: any;
  name: string;
  component: Component;
  description: string;
};