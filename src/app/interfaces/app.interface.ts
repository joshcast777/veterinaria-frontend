import { ServiceType } from "./app.enum";

export interface Appointment {
	appointmentDate: Date;
	appointmentId: number;
	createdAt: Date;
	reasons: string;
	userId: number;
	user: {
		name: string;
		lastName: string;
	};
}

export interface AuthResponse {
	jwt: string;
	userId: string;
}

export interface AuthUser {
	email: string;
	password: string;
}

export interface Blog {
	author: string;
	blogId: number;
	blogSections?: BlogSection[];
	body?: string;
	createdAt: Date;
	imagePath: string;
	summary: string;
	title: string;
}

export interface BlogComment {
	blogId: number;
	comment: string;
	createdAt: Date;
	user: {
		name: string;
		lastName: string;
	};
}

export interface BlogSection {
	body: string;
	subtitle?: string;
}

export interface Button {
	label: string;
	link?: string;
	onClick?: () => void;
}

export interface Card {
	title: string;
	subtitle?: string;
	imagePath: string;
	socialLinks?: SocialLink;
	body: string;
}

export interface Item {
	id: number;
	imagePath: string;
	name: string;
	price: number;
}

export interface Layout {
	layout?: "middle-layout" | "small-left-layout" | "small-right-layout";
	reverse?: boolean;
	imageShape?: "image-c" | "image-ltr" | "image-rtl";
	imageShapeReverse?: "image-c" | "image-ltr-reverse" | "image-rtl-reverse";
}

export interface Pet {
	age: number;
	animal: string;
	createdAt: Date;
	name: string;
	petId: number;
	sex: string;
	status: string;
	updatedAt: Date;
	userId: number;
	vaccines: number;
}

export interface Section {
	label: string;
	link: string;
	imagePath: string;
}

export interface Service {
	body: string;
	imagePath: string;
	title: string;
	type: ServiceType;
}

export interface SocialLink {
	facebookLink: string;
	instagramLink: string;
	twitterLink: string;
}

export interface Team {
	body: string;
	degree: string;
	fullName: string;
	imagePath: string;
	ocupation: string;
	socialLink: SocialLink;
}

export interface TextImage {
	title: string;
	boldTitle?: string;
	body: string;
	imagePath: string;
	button?: Button | null;
}

export interface User {
	userId: number;
	dni: string;
	name: string;
	lastName: string;
	phone: string;
	birthDate: Date;
	address: string;
	email: string;
	password: string;
	status: string;
	createdAt: Date;
	updatedAt: Date;
}
