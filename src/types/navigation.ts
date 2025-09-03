// src/types/navigation.ts

export interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  hasSubmenu?: boolean;
  route?: string;
  subItems?: SubMenuItem[];
}

export interface SubMenuItem {
  id: string;
  label: string;
  route: string;
  parent: string;
}

export type PageType = 
  | "dashboard"
  | "job-desk" 
  | "employee"
  | "employee/list"
  | "employee/add"
  | "leave"
  | "leave/list"
  | "leave/add"
  | "attendance"
  | "attendance/list"
  | "attendance/add"
  | "administration"
  | "administration/list"
  | "administration/add"
  | "setting"
  | "setting/list"
  | "setting/add";

export interface NavigationState {
  currentPage: PageType;
  activeMenuItem: string;
  breadcrumb?: string[];
}